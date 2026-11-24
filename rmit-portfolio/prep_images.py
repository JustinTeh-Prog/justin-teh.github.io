"""Prepare compressed JPEGs for the RMIT portfolio PDF.

Usage: python prep_images.py <repo_root> <scratch_dir>
Sources: website assets (<repo>/assets), Drive PDF renders + crops, and YouTube frames (<scratch>).
"""
import sys, os
from PIL import Image, ImageOps

repo, S = sys.argv[1], sys.argv[2]
A = os.path.join(repo, "assets")
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "img")
HI, CR, YT = os.path.join(S, "hi"), os.path.join(S, "crops"), os.path.join(S, "yt")


def a(p): return os.path.join(A, p)
def hi(p): return os.path.join(HI, p)
def cr(p): return os.path.join(CR, p)
def yt(v, t): return os.path.join(YT, v, "t%05d.jpg" % t)


# name: (source, max_width, crop_box_fraction or None, flags)
SPEC = {
    # Auraplane
    "aura_critical": (hi("auraplane_critical_p01.png"), 2600, None, ""),
    "aura_render":   (hi("auraplane_critical_p01.png"), 1600, (0.041, 0.137, 0.473, 0.583), ""),
    "aura_site":     (hi("auraplane_sitemodel_p01.png"), 2400, None, ""),
    "aura_rww":      (hi("auraplane_report2_p01.png"), 1800, None, ""),
    "aura_context":  (hi("auraplane_report2_p02.png"), 1800, None, ""),
    # LCA
    "lca_impact": (a("Acad/LCA/Impact Assessment.webp"), 1250, None, ""),
    "lca_calc":   (a("Acad/LCA/LCA Calculation.webp"), 1776, None, ""),
    # PV smart bin
    "pv_proto":  (hi("pvimg_p6_0.jpeg"), 1100, None, ""),
    "pv_proto2": (hi("pvimg_p6_1.jpeg"), 600, None, ""),
    "pv_cad1":   (hi("pvimg_p5_1.jpeg"), 800, None, ""),
    "pv_cad2":   (hi("pvimg_p5_2.jpeg"), 800, None, ""),
    "pv_draw":   (hi("pvimg_p5_3.png"), 700, None, ""),
    "pv_schem":  (hi("pvimg_p5_0.png"), 800, None, ""),
    "pv_scope":  (hi("pvimg_p10_2.png"), 700, None, ""),
    "pv_test":   (hi("pvimg_p11_2.jpeg"), 700, None, ""),
    # CO2
    "co2_ui":       (a("Acad/DDW_LinearRegression/Feature Prediction.webp"), 700, None, ""),
    "co2_viz":      (cr("co2_viz.jpg"), 1500, None, ""),
    "co2_final":    (cr("co2_final.jpg"), 1200, None, ""),
    "co2_solution": (cr("co2_solution.jpg"), 1500, None, ""),
    "co2_iter3":    (cr("co2_iter3.jpg"), 1400, None, ""),
    # Eudaimonia bus stop
    "hcd_rww":  (a("Acad/HCD/realwinworth.webp"), 1500, None, ""),
    "hcd_test": (a("Acad/HCD/usertesting.webp"), 1300, None, ""),
    "hcd_sim1": (yt("eudaimonia", 42), 1500, None, ""),
    "hcd_sim2": (yt("eudaimonia", 67), 1000, None, ""),
    "hcd_sim3": (yt("eudaimonia", 79), 1000, None, ""),
    "hcd_sim4": (yt("eudaimonia", 103), 1000, None, ""),
    "hcd_sim5": (yt("eudaimonia", 6), 1000, None, ""),
    # Close to Heart
    "cqu_problem": (a("Exchange/CQU/GEO_CQU.webp"), 1300, None, ""),
    "cqu_hmw":     (cr("cqu_hmw.jpg"), 1200, None, ""),
    "cqu_wire":    (hi("cqu_proposal_p13.png"), 1100, (0.40, 0.08, 0.93, 0.97), ""),
    "cqu_stack":   (cr("cqu_stack.jpg"), 1400, None, ""),
    "cqu_form":    (cr("cqu_form.jpg"), 1300, None, ""),
    # IADL
    "iadl_team":   (a("Acad/Project1_IADL/IADL (1).jpeg"), 1500, None, ""),
    "iadl_glove":  (a("Acad/Project1_IADL/IADL (2).webp"), 1200, None, ""),
    "iadl_cv":     (a("Acad/Project1_IADL/IADL (3).webp"), 1465, None, ""),
    "iadl_poster": (a("Acad/Project1_IADL/Poster.webp"), 1500, None, ""),
    "iadl_patent": (a("Acad/Project1_IADL/IP2SG_Inbox.webp"), 1400, None, ""),
    # Parametric
    "para_cover": (a("Acad/ParametricModel/Cover.webp"), 1000, (0.52, 0.02, 1.0, 0.98), ""),
    "para_s2":    (a("Acad/ParametricModel/Slide2.webp"), 1040, None, ""),
    "para_s3":    (a("Acad/ParametricModel/Slide3.webp"), 1040, None, ""),
    "para_s5":    (a("Acad/ParametricModel/Slide5.webp"), 1040, None, ""),
    "para_matrix": (a("Acad/ParametricModel/Slide3.webp"), 1040, (0.47, 0.09, 0.99, 0.66), ""),
    "para_def":    (a("Acad/ParametricModel/Slide5.webp"), 1040, (0.53, 0.105, 0.935, 0.895), ""),
    # GenAI campaign
    "genai_cover":  (a("Exchange/TIIDE/Cover.webp"), 1500, None, ""),
    "genai_poster": (a("Exchange/TIIDE/Final-Poster.webp"), 1300, None, ""),
    "genai_t2i":    (a("Exchange/TIIDE/T2I+LoRa.webp"), 1300, None, ""),
    "genai_flux":   (a("Exchange/TIIDE/flux1kontext.webp"), 1300, None, ""),
    "genai_pubs":   (a("Exchange/TIIDE/Pubs-Collateral.webp"), 1300, None, ""),
    "genai_pres":   (a("Exchange/TIIDE/Presentation.webp"), 1000, None, ""),
    # UniTrack
    "uni_poster": (a("Acad/UniTrack/Poster.webp"), 595, None, ""),
    "uni_cover":  (a("Acad/UniTrack/Cover.webp"), 1200, None, ""),
    "uni_team":   (a("Acad/UniTrack/team & booth.jpg"), 1200, None, ""),
    # EnjoyMusic
    "em_show":     (hi("enjoymusic_deck_p25.png"), 1600, (0.235, 0.27, 0.765, 0.915), ""),
    "em_castles":  (hi("enjoymusic_deck_p24.png"), 1500, (0.07, 0.29, 0.93, 0.92), ""),
    "em_workflow": (hi("enjoymusic_deck_p23.png"), 1500, (0.04, 0.37, 0.95, 0.86), ""),
    "em_mocap":    (cr("em_mocap.jpg"), 1400, None, ""),
    "em_music":    (cr("em_music.jpg"), 1500, None, ""),
    "em_daw":      (cr("em_daw.jpg"), 1200, None, ""),
    # Lighting
    "lx_lift":    (a("Arts/2TheLift.webp"), 1500, None, ""),
    "lx_rush1":   (a("Arts/3RUSH (1).webp"), 1300, None, ""),
    "lx_rush2":   (a("Arts/3RUSH (2).webp"), 900, None, ""),
    "lx_rush3":   (a("Arts/3RUSH (3).webp"), 1100, None, ""),
    "lx_spec1":   (a("Arts/4SPECTACULAR (1).webp"), 1500, None, ""),
    "lx_spec2":   (a("Arts/4SPECTACULAR (2).webp"), 1500, None, ""),
    "lx_spec3":   (a("Arts/4SPECTACULAR (3).webp"), 1100, None, ""),
    "lx_ebtb1":   (a("Arts/7EBTB (1).webp"), 1500, None, ""),
    "lx_ebtb2":   (a("Arts/7EBTB (2).webp"), 1100, None, ""),
    "lx_console": (a("Arts/1Lights.webp"), 1100, None, ""),
    "lx_rock1":   (a("Arts/8Rockafall (1).webp"), 1100, None, ""),
    "lx_rock2":   (a("Arts/8Rockafall (2).webp"), 1300, None, ""),
    "lx_rock3":   (a("Arts/8Rockafall (3).webp"), 1100, None, ""),
    "lx_ori1":    (a("Arts/9OriFinale (1).webp"), 1300, None, ""),
    "lx_ori2":    (a("Arts/9OriFinale (2).webp"), 1300, None, ""),
    "lx_fnm1":    (a("Arts/10FNM (1).webp"), 1500, None, ""),
    "lx_fnm2":    (a("Arts/10FNM (2).webp"), 1024, None, ""),
    "lx_fnm5":    (a("Arts/10FNM (5).webp"), 1024, None, ""),
    "lx_fiesta":  (a("Arts/6ARTSFIESTA.webp"), 1024, None, ""),
    "lx_xbows":   (a("Arts/5XBOWS.webp"), 1000, None, ""),
    # Video (DMPC) frames
    "v_tsea_guitar":    (yt("tsea21", 137), 1300, (0, 0.13, 1, 0.87), ""),
    "v_tsea_dance":     (yt("tsea21", 45), 1100, (0, 0.13, 1, 0.87), ""),
    "v_tsea_credit":    (yt("tsea21", 173), 1000, (0, 0.13, 1, 0.87), ""),
    "v_believer_red":   (yt("believer", 67), 1300, None, ""),
    "v_believer_stage": (yt("believer", 184), 1000, None, ""),
    "v_believer_desk":  (yt("believer", 29), 1000, None, ""),
    "v_oh21_orch":      (yt("oh21d1", 1055), 1300, None, ""),
    "v_oh21_salvo":     (yt("oh21d1", 150), 1000, None, ""),
    "v_oh21_live":      (yt("oh21d2", 1112), 1000, None, ""),
    "v_oh21_credit":    (yt("oh21d2", 4227), 1000, None, ""),
    "v_spec21_live":    (yt("spectacular21", 3375), 1000, None, ""),
    "v_spec21_kahoot":  (yt("spectacular21", 3825), 1000, None, ""),
    "v_ndc_finale":     (yt("ndc20", 5290), 1000, None, ""),
    "v_ndc_singai":     (yt("ndc20", 2180), 1000, None, ""),
    "v_ndc_tapau":      (yt("ndc20", 4720), 1000, None, ""),
    "v_travelogue":     (yt("travelogue", 1716), 1000, None, ""),
    "v_cocny":          (yt("cocny", 68), 1000, None, ""),
    "v_oh21_tour":      (yt("oh21d3", 58), 1000, None, ""),
    # Misc
    "portrait":  (a("Personal/Personal (1).jpg"), 600, None, ""),
    "award_cca": (a("Accolades/TPCCASilverAward.webp"), 900, None, ""),
}

DENSE = {"aura_critical", "aura_site", "aura_rww", "aura_context", "lca_calc", "co2_final", "hcd_rww"}


def trim_letterbox(im, thr=14):
    g = ImageOps.grayscale(im)
    w, h = g.size
    px = g.load()
    xs = range(0, w, 8)

    def dark(y):
        return sum(px[x, y] for x in xs) / len(xs) < thr

    top = 0
    while top < h // 3 and dark(top):
        top += 1
    bot = h - 1
    while bot > h * 2 // 3 and dark(bot):
        bot -= 1
    return im.crop((0, top + 2, w, bot - 1))


def main():
    os.makedirs(OUT, exist_ok=True)
    total = 0
    for name, (src, mw, box, flags) in SPEC.items():
        im = Image.open(src).convert("RGB")
        if box:
            W, H = im.size
            im = im.crop((int(box[0] * W), int(box[1] * H), int(box[2] * W), int(box[3] * H)))
        if "trim" in flags:
            im = trim_letterbox(im)
        if im.width > mw:
            im = im.resize((mw, round(im.height * mw / im.width)), Image.LANCZOS)
        q = 84 if name in DENSE else 78
        out = os.path.join(OUT, name + ".jpg")
        im.save(out, quality=q, optimize=True, progressive=True)
        total += os.path.getsize(out)
    print("%d images, %.1f MB" % (len(SPEC), total / 1e6))


if __name__ == "__main__":
    main()
