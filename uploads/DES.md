# Standalone Photovoltaic System for Smart Bin

## Skill Topic Tags

```html
<div class="skill-cloud">
  <span>Research</span>
  <span>IoT / Software Engineering</span>
</div>
```

**Recommended portfolio tags:**  
`Research` · `IoT / Software Engineering`

**Optional secondary tags:**  
`Sustainability` · `Energy Systems` · `Hardware Prototyping`

---

## One-Line Summary

A compact standalone photovoltaic power system designed to support smart bin sensors and communication modules, reducing grid reliance while improving the feasibility of sustainable smart infrastructure.

---

## Problem

As Singapore advances Smart Nation 2.0, public infrastructure is increasingly expected to integrate sensing, automation, and digital monitoring. Smart bins can support waste monitoring, but they also introduce continuous power requirements for sensors, motors, and communication modules. This project explored how a standalone photovoltaic system could power a smart bin efficiently, reducing grid dependence while supporting sustainable digital infrastructure.

---

## Role / Process

Worked on a Designing Energy Systems academic project to size, test, and validate a standalone solar-powered smart bin system. The process involved measuring load current under different operating states, using a shunt resistor and oscilloscope to capture fast current draw, analysing peak sun hour constraints, sizing the battery and PV panel, and integrating the solar panel, charge controller, battery, and custom casing into a working prototype.

---

## Solution / Tech Stack

The proposed solution uses a compact photovoltaic system with battery storage to power a smart bin independently from the grid. The design includes a side-mounted solar panel casing, a Li-Po battery, a charge controller, and a scaled smart-bin prototype. The team avoided placing the solar panel directly on the lid to reduce mechanical strain on the bin’s opening mechanism.

```html
<div class="skill-cloud">
  <span>Photovoltaic System Design</span>
  <span>Battery Sizing</span>
  <span>Panel Sizing</span>
  <span>Shunt Resistor Measurement</span>
  <span>Oscilloscope Testing</span>
  <span>Load Analysis</span>
  <span>Li-Po Battery</span>
  <span>Charge Controller</span>
  <span>Solar Panel Integration</span>
  <span>Fusion / CAD Casing Design</span>
  <span>Energy Systems</span>
</div>
```

---

## Technical Implementation

The system was designed around three main electrical components and one mechanical integration component:

- **Battery:** A 3.7 V Li-Po battery, with at least 1000 mAh selected as the smallest practical capacity after load and battery-sizing calculations.
- **Solar Panel:** A 6 V, 480 mA panel array selected to support charging requirements and provide buffer above the smart bin’s peak instantaneous current.
- **Charge Controller:** A 6 V charge controller compatible with a 3.7 V Li-Po battery.
- **Custom Casing:** A side-hook casing designed to hold the PV module externally without interfering with routine lid removal or bin operation.

---

## Data Collection & Testing

The team measured the smart bin’s current draw across key operating states:

| Operating State | Measured Current / Load Insight |
|---|---|
| Start-up | Approximately 168 mA for around 1 second |
| Idle | Approximately 11 mA over continuous operation |
| Opening / Closing Cycle | Approximately 218 mA during opening and 235 mA during closing |
| Total Daily Cycles | 1437 open-close cycles per day |
| True Total Daily Load | Approximately 420.5 mAh/day |

Because the current draw was small and occurred quickly, the team used a **1.2 Ω shunt resistor** in series with the smart bin and captured voltage over time using an oscilloscope, then applied Ohm’s Law to estimate circuit current.

---

## Results / Evidence

The final scaled prototype specified a **3.7 V battery with at least 1000 mAh capacity**, a **6 V, 480 mA PV panel setup**, and a compatible charge controller. The calculated final adjusted battery capacity was approximately **867.2 mAh**, making a 1000 mAh battery a practical selection with design margin. The PV system was sized against a worst-case December peak sun hour assumption of **3.97 PSH**.

The project also produced:

- A detailed electrical and mechanical schematic of the working prototype.
- A physical prototype with side-mounted solar panel casing.
- Oscilloscope-based current measurements for start-up, idle, opening, and closing states.
- Charging scenario analysis across rated, bright daylight, cloudy, shady, rainy, and indoor lighting conditions.
- An upscaled outdoor-use calculation for a larger smart bin implementation.

---

## Functionality & Usability Impact

The PV system was enclosed in a side-mounted casing and connected directly to the battery terminal, avoiding wire disturbance during routine lid removal. The report notes that minor ventilation gaps may introduce slight odour leakage, but the impact on usability and maintenance was considered negligible.

---

## What This Demonstrates

This project demonstrates applied energy-system design, engineering measurement, hardware integration, and sustainability-oriented prototyping. It shows the ability to move from load analysis and environmental assumptions into concrete battery, panel, and casing design decisions for a working smart infrastructure prototype.

---

## Suggested Portfolio Card Version

### Standalone Photovoltaic System for Smart Bin

**Tags:** Research · IoT / Software Engineering · Sustainability · Energy Systems

Designed and tested a standalone solar-powered system for a smart bin prototype, supporting Singapore’s broader Smart Nation and sustainable infrastructure direction. The project involved load-current measurement using a shunt resistor and oscilloscope, battery and PV panel sizing, peak sun hour analysis, charge-controller selection, and custom casing design.

The final scaled system used a 3.7 V ≥1000 mAh Li-Po battery, a 6 V 480 mA panel setup, and a side-mounted PV casing to reduce mechanical interference with the bin lid. Testing estimated a true daily load of approximately 420.5 mAh/day and a final adjusted battery capacity requirement of approximately 867.2 mAh.

```html
<div class="skill-cloud">
  <span>Photovoltaic Design</span>
  <span>Battery Sizing</span>
  <span>Panel Sizing</span>
  <span>Oscilloscope Testing</span>
  <span>Shunt Resistor</span>
  <span>Charge Controller</span>
  <span>CAD Casing</span>
  <span>Sustainability</span>
</div>
```

**Result:** Produced a working scaled prototype, electrical and mechanical schematics, current-draw measurements, energy calculations, charging scenario analysis, and upscaled outdoor-use recommendations.
