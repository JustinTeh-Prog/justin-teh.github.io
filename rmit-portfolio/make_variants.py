"""Generate two portfolio variants from portfolio.html (which is never modified):

  portfolio_simplified.html  RMIT version with fewer footnotes, bold roles,
                             and transparent, centred charts with their legends
  portfolio_general.html     the simplified version with every RMIT / course
                             reference replaced, for general distribution

Run make_transparent.py first (it writes the img/*_t.png charts).
Usage: python make_variants.py
"""
import io
import os
import re

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, "portfolio.html")
CHARTS = ["lca_impact", "lca_calc", "co2_viz", "co2_final", "co2_iter3", "co2_solution", "para_matrix"]


class Doc:
    def __init__(self, text):
        self.s = text

    def rep(self, a, b, n=1):
        c = self.s.count(a)
        assert c == n, "expected %d of %r, found %d" % (n, a[:70], c)
        self.s = self.s.replace(a, b)

    def sub(self, pattern, repl, n=None, flags=re.S):
        new, c = re.subn(pattern, repl, self.s, flags=flags)
        assert c and (n is None or c == n), "pattern %r matched %d" % (pattern[:60], c)
        self.s = new


# ---------------------------------------------------------------- simplified
def simplify(d):
    # styles for bold roles and transparent, centred charts
    d.rep("</style>", """
/* variant: bold roles */
.meta dd.role { font-weight: 600; color: var(--ink); }
.creds .r { font-weight: 600; color: var(--ink); }
/* variant: transparent charts, centred with their legend */
figure.chart { justify-content: center; align-items: center; }
figure.chart img { flex: 0 1 auto; width: auto; height: auto; max-width: 100%; max-height: calc(100% - 6mm); min-height: 0; object-fit: contain; background: transparent !important; }
figure.chart figcaption { text-align: center; white-space: normal; }
</style>""")

    # charts: transparent PNG, centred figure, no white box
    def chart(m):
        return '<figure class="chart"%s><img src="img/%s_t.png" alt="">' % (m.group(2) or "", m.group(3))
    d.sub(r'<figure( class="[^"]*")?( style="[^"]*")?><img src="img/(%s)\.jpg" alt=""(?: style="[^"]*")?>' % "|".join(CHARTS),
          chart, n=len(CHARTS))

    # captions: drop figure numbers; photo captions keep only their label
    # (text before " — ") plus any closing attribution such as "(group board)";
    # chart captions keep the whole legend.
    def caption(fig):
        block = fig.group(0)
        is_chart = 'class="chart"' in block

        def cap(m):
            text = m.group(1)
            text = re.sub(r"^<b>[^<]*</b>", "", text)
            if not is_chart and " — " in text:
                head, tail = text.split(" — ", 1)
                attrib = re.search(r"(\([^()]*\))\s*$", tail)
                text = head + (" " + attrib.group(1) if attrib else "")
            return "<figcaption>" + text + "</figcaption>"
        return re.sub(r"<figcaption>(.*?)</figcaption>", cap, block, flags=re.S)
    d.sub(r"<figure\b.*?</figure>", caption)

    # link lines, derivation note, card links and the diagram's footnote
    d.sub(r'\s*<div class="links">.*?</div>', "")
    d.sub(r"<small>12\.70 MJ.*?</small>", "", n=1)
    d.sub(r'\s*<p>Future work:.*?</p>', "", n=1)
    d.sub(r'\s*<a href="[^"]*1kikeuVh4[^"]*">Project proposal \(PDF\)</a>', "", n=1)
    d.sub(r'\s*<a href="[^"]*1OWoS8[^"]*">App demo \(video\)</a>', "", n=1)
    d.sub(r'\s*<g font-family="IBM Plex Mono, Noto Sans Mono, monospace" font-size="2\.2" fill="#6F6B62">.*?</g>', "", n=1)
    d.rep(" Underlined links open the full reports and videos.", "")

    # bold roles
    d.sub(r"<dt>(My role|Roles)</dt><dd>", r'<dt>\1</dt><dd class="role">')
    d.rep("<dt>Team</dt><dd>Individual project</dd>", '<dt>Team</dt><dd class="role">Individual project</dd>')
    for a, b in [
        ("Jul 2025 · Lighting Director — Jean Tay's", 'Jul 2025 · <b class="r">Lighting Director</b> — Jean Tay\'s'),
        ("Apr 2022 · Lighting Director</span>", 'Apr 2022 · <b class="r">Lighting Director</b></span>'),
        ("Nov 2019 · Tech Coordinator / Lighting Director</span>", 'Nov 2019 · <b class="r">Tech Coordinator / Lighting Director</b></span>'),
        ("Theatre · Nov 2019 · Lighting Director</span>", 'Theatre · Nov 2019 · <b class="r">Lighting Director</b></span>'),
        ("Campus Centre · Organiser &amp; Lighting Director — led", 'Campus Centre · <b class="r">Organiser &amp; Lighting Director</b> — led'),
        ("Sports Hall · Lighting Director</span>", 'Sports Hall · <b class="r">Lighting Director</b></span>'),
        ("SUTD Auditorium · Lighting Director</span>", 'SUTD Auditorium · <b class="r">Lighting Director</b></span>'),
        ("Tampines Hub · Lighting Director</span>", 'Tampines Hub · <b class="r">Lighting Director</b></span>'),
        ("Jan 2025 · Lighting Operator</span>", 'Jan 2025 · <b class="r">Lighting Operator</b></span>'),
        ('<span>Filmed two items; filmed and edited the finale "We Are Singapore" from staff and student choir footage; livestream</span>',
         '<span><b class="r">Videographer &amp; editor, livestream</b> · edited the finale "We Are Singapore"</span>'),
        ("<span>Day 1: filmed emcees, stitched the concert, motion graphics · Day 2: livestreamed chat show · Day 3: virtual tour</span>",
         '<span><b class="r">Videographer &amp; editor, motion graphics, livestream</b></span>'),
        ("<span>Livestream and motion graphics, with live audience quizzes</span>",
         '<span><b class="r">Livestream &amp; motion graphics</b> · live audience quizzes</span>'),
        ("<span>Producer</span>", '<span><b class="r">Producer</b></span>'),
        ("<span>Believer × Radioactive · I'm Ready Now · Chinese Orchestra CNY and Travelogue · Open House 2022</span>",
         '<span><b class="r">Production crew</b> · Believer × Radioactive, I\'m Ready Now, Chinese Orchestra</span>'),
    ]:
        d.rep(a, b)
    d.rep("<dt>Context</dt><dd>Temasek Polytechnic Digital Media &amp; Production Crew (DMPC)</dd>",
          "<dt>Context</dt><dd>Temasek Polytechnic Digital Media &amp; Production Crew (DMPC)</dd>\n"
          '        <dt>Roles</dt><dd class="role">Vice-president (2020); videographer, editor, producer</dd>')
    return d


# ---------------------------------------------------------------- general distribution
ROLES = {"01": "Group leader", "02": "Group leader", "03": "Group leader", "04": "Group leader",
         "05": "Group leader", "06": "Group leader", "07": "Group leader, software lead", "08": "Individual",
         "09": "Group leader", "10": "Group leader", "11": "Intern student rep.", "12": "Lighting director",
         "13": "Lighting director, organiser", "14": "Vice-president, producer"}


def generalise(d):
    d.rep("<title>Justin Teh — Portfolio of Works (RMIT Exchange)</title>", "<title>Justin Teh — Portfolio of Works</title>")
    d.rep(".courses .g { border-color: var(--a); }", ".courses .g { border-color: var(--a); }\ntable.idx td.rl { font-weight: 600; font-size: 6.9pt; width: 30mm; }")

    # cover: contact details instead of the RMIT courses
    d.sub(r'<div class="k">Prepared for RMIT University.*?</div>\s*<div class="course">.*?</div></div>\s*<div class="course">.*?</div></div>',
          '<div class="k">Selected work in design, computation and live production</div>\n'
          '      <div class="course"><span class="chip g">Email</span><div>tnh.justin@gmail.com</div></div>\n'
          '      <div class="course"><span class="chip r">Web</span><div>justin-teh.vercel.app<small>linkedin.com/in/teh-nian-hong-justin</small></div></div>', n=1)

    # intro
    d.sub(r"<p>At RMIT I want to push both halves of that practice further:.*?</p>",
          "<p>I'm open to software, IoT, engineering, AI, creative-technology and arts-production collaborations, especially work that pairs technical implementation with human-centred impact.</p>", n=1)
    d.rep("my role, and how the work relates to the two courses.", "my role, and what the work shows.")
    d.rep('<th class="c">GRAP1042</th><th class="c">ARCH1477</th>', "<th>My role</th>")
    d.sub(r'colspan="6"', 'colspan="5"', n=3)

    def row(m):
        n = m.group(1)
        body = re.sub(r'<td class="c">.*?</td><td class="c">.*?</td>', '<td class="rl">%s</td>' % ROLES[n], m.group(2), count=1)
        return '<tr><td class="n">%s</td>%s</tr>' % (n, body)
    d.sub(r'<tr><td class="n">(\d\d)</td>(.*?)</tr>', row, n=14)
    d.sub(r"<div style=\"font:400 5\.8pt/1 'IBM Plex Mono'[^\"]*\"><i class=\"dot g\".*?</div>\s*<div class=\"courses\">.*?</div>\s*</div>\s*</div>",
          '<div class="courses">\n'
          '        <div class="g"><b>Design &amp; research</b>Site observation and mapping, interviews and participatory workshops, life-cycle analysis, design thinking, prototyping and user testing.</div>\n'
          '        <div class="r"><b>Build &amp; production</b>Python, Java and C++; OpenCV, MediaPipe and ComfyUI; Rhino / Grasshopper and Fusion 360; lighting on GrandMA and Avolites; film, edit and livestream.</div>\n'
          "      </div>\n    </div>", n=1)   # closes .courses and the right column; the grid's own close follows

    # work pages: course boxes become "what it shows"
    d.rep('<div class="hd">Relevance to RMIT</div>', '<div class="hd">What it shows</div>', n=14)
    d.sub(r'<span class="chip g">GRAP1042</span>', '<span class="chip g">Systems</span>')
    d.sub(r'<span class="chip r">ARCH1477</span>', '<span class="chip r">Prototyping</span>')

    # closing: replace the two course goals
    d.sub(r'<div style="display:flex;flex-direction:column">\s*<div class="k6" style="color:var\(--a\)">What I want from GRAP1042</div>.*?</div>\s*<div style="display:flex;flex-direction:column">\s*<div class="k6" style="color:var\(--b\)">What I want from ARCH1477</div>\s*<p[^>]*>.*?</p>',
          '<div style="display:flex;flex-direction:column">\n'
          '      <div class="k6" style="color:var(--a)">What I\'m open to</div>\n'
          "      <p style=\"font:400 8pt/1.46 'Archivo', 'Noto Sans', 'Noto Sans Math', 'Noto Sans SC', sans-serif;margin:0 0 2mm\">Software, IoT, engineering, AI and creative-technology projects, and arts productions that need someone to light, run or organise them.</p>\n"
          "    </div>\n"
          '    <div style="display:flex;flex-direction:column">', n=1)
    # public copy: posters with teammates' names covered (PDPA); RMIT versions keep the originals
    d.rep('img/iadl_poster.jpg', 'img/iadl_poster_public.jpg')
    d.rep('img/uni_poster.jpg', 'img/uni_poster_public.jpg')
    # faces blurred and other crew names blurred (PDPA); RMIT versions keep the originals
    d.rep('img/iadl_team.jpg', 'img/iadl_team_public.jpg')
    d.rep('img/uni_team.jpg', 'img/uni_team_public.jpg')
    d.rep('img/genai_pres.jpg', 'img/genai_pres_public.jpg')
    d.rep('img/hcd_test.jpg', 'img/hcd_test_public.jpg')
    d.rep('img/v_tsea_credit.jpg', 'img/v_tsea_credit_public.jpg')
    d.rep('img/v_oh21_credit.jpg', 'img/v_oh21_credit_public.jpg')
    d.rep('img/aura_rww.jpg', 'img/aura_rww_public.jpg')
    d.rep('img/em_mocap.jpg', 'img/em_mocap_public.jpg')
    assert "RMIT" not in d.s and "GRAP" not in d.s and "ARCH1477" not in d.s, "course reference left in general version"
    return d


if __name__ == "__main__":
    src = io.open(SRC, encoding="utf-8").read()
    simple = simplify(Doc(src))
    io.open(os.path.join(HERE, "portfolio_simplified.html"), "w", encoding="utf-8").write(simple.s)
    general = generalise(Doc(simple.s))
    io.open(os.path.join(HERE, "portfolio_general.html"), "w", encoding="utf-8").write(general.s)
    print("wrote portfolio_simplified.html and portfolio_general.html")
