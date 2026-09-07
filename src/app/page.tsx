"use client"

import Script from "next/script"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ShieldCheck,
  Flame,
  Factory,
  Settings,
  CheckCircle2,
  Wrench,
  Zap,
  Wind,
  Recycle,
  Battery,
  Layers,
  Award,
  Building2,
  Filter,
  Droplets,
  AlertTriangle,
  RotateCw,
  Gauge,
  Boxes,
} from "lucide-react"
import LeadForm from "@/components/LeadForm"

const LOGO_URL =
  "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1779361354/cropped-Continental-Furnaces-Logo_q8ict4.jpg"
const HERO_BG_URL =
  "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1779688587/WhatsApp_Image_2026-05-24_at_2.01.46_PM_e3rdsn.jpg"
const SECTION_BG_URL =
  "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1779528431/WhatsApp_Image_2026-05-23_at_12.09.18_PM_ntnyd3.jpg"

export default function LandingPage() {
  const scrollToLeadForm = () => {
    const candidates = [
      document.getElementById("top-form-desktop"),
      document.getElementById("top-form-mobile"),
      document.getElementById("bottom-form"),
    ].filter(Boolean) as HTMLElement[]

    const target =
      candidates.find((el) => el.getClientRects().length > 0) ?? candidates[0]

    if (!target) return

    requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" })
    })
  }

  return (
    <>
      <Script
        id="gtm-script"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KMD92WBZ');`,
        }}
      />

      <div className="flex flex-col min-h-screen overflow-x-hidden bg-white">
        {/* NAVBAR */}
        <nav className="fixed top-0 w-full z-50 border-b border-slate-200 bg-white backdrop-blur-xl overflow-x-hidden">
          <div className="container mx-auto flex h-16 md:h-24 max-w-7xl items-center justify-between px-4">
            {/* Logo */}
            <div className="flex items-center gap-3 md:gap-5">
              <Link href="/" className="flex items-center">
                <Image
                  src={LOGO_URL}
                  alt="Continental Furnaces"
                  width={180}
                  height={55}
                  className="h-10 md:h-14 w-auto object-contain"
                  priority
                />
              </Link>
            </div>

            {/* Right CTA */}
            <div className="hidden lg:flex items-center gap-5">
              <Button
                className="bg-primary hover:bg-primary/90 text-white font-bold px-7 h-12 rounded-xl"
                onClick={scrollToLeadForm}
              >
                GET FREE QUOTE →
              </Button>
            </div>
          </div>
        </nav>

        <main className="pt-[64px] md:pt-[96px] pb-24 lg:pb-0 w-full">
          {/* HERO SECTION */}
          <section className="relative overflow-hidden bg-background py-20 lg:py-28 w-full">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={HERO_BG_URL}
                alt="Lead Smelting & Recycling Plant"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/40" />

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:60px_60px]" />

            <div className="container relative z-10 mx-auto max-w-7xl px-4">
              <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[54%_38%] xl:gap-24">
                {/* LEFT CONTENT */}
                <div className="space-y-8 text-white pt-4">
                  {/* Eyebrow Badge */}
                  <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs md:text-sm font-semibold text-primary uppercase tracking-wider">
                    <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                    500 KG TO 10 TONNES PER BATCH
                  </div>

                  {/* Main Heading */}
                  <div className="space-y-4">
                    <h1 className="max-w-5xl text-3xl font-bold leading-[1.1] tracking-tight text-primary md:text-4xl lg:text-5xl uppercase">
                      Lead Smelting & Recycling Plant
                    </h1>

                    <p className="max-w-3xl text-base md:text-lg leading-relaxed text-white/90">
                      Rotary melting furnaces with integrated air pollution
                      control designed to recover lead from scrap batteries,
                      plates, powder and blast-furnace slag in a single
                      production cycle.
                    </p>
                  </div>

                  {/* SPEC / TRUST TILES */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-3xl">
                    {[
                      {
                        title: "Since 1987",
                        subtitle: "Nearly 40 Years of Rotary Furnace Engineering",
                        icon: <Factory className="h-8 w-8 text-primary" />,
                      },
                      {
                        title: "ISO Certified",
                        subtitle: "ISO 9001:2015 & ISO 14001:2015",
                        icon: <ShieldCheck className="h-8 w-8 text-primary" />,
                      },
                      {
                        title: "Custom-Built",
                        subtitle: "For Your Charge Mix & Capacity",
                        icon: <Settings className="h-8 w-8 text-primary" />,
                      },
                      {
                        title: "Turnkey Plant",
                        subtitle: "Furnace + Complete Pollution Control System",
                        icon: <Wrench className="h-8 w-8 text-primary" />,
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="rounded-2xl border border-white/10 bg-card p-5 backdrop-blur-sm"
                      >
                        <div className="flex items-start gap-4">
                          <div className="mt-1 shrink-0">{item.icon}</div>
                          <div className="space-y-1">
                            <h3 className="text-xl font-bold leading-snug text-white">
                              {item.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-white/70">
                              {item.subtitle}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* RIGHT FORM */}
                <div
                  className="lg:sticky lg:top-32"
                  id="top-form-desktop"
                >
                  <LeadForm
                    title="Get a Smelting Plant Quote"
                    subtitle="Discuss your charge mix & capacity with our furnace engineers."
                  />
                </div>
              </div>
            </div>
          </section>

          {/* VALUE PROPOSITION / INTRO BANNER */}
          <section className="bg-slate-900 text-white py-16 border-y border-white/10 w-full">
            <div className="container mx-auto max-w-7xl px-4">
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <div className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-xs md:text-sm font-bold text-primary tracking-wide">
                  MAXIMUM RECOVERY. CONTROLLED EMISSIONS. BUILT FOR SECONDARY LEAD.
                </div>

                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-white">
                  Purpose-Engineered Rotary Melting for Secondary Lead Production
                </h2>

                <div className="space-y-4 text-base md:text-lg text-white/80 leading-relaxed text-left md:text-center">
                  <p>
                    Continental Furnaces manufactures rotary melting furnaces
                    for non-ferrous metal recycling, with specialised expertise in
                    secondary lead production.
                  </p>
                  <p>
                    Our furnaces process scrap batteries, lead plates, battery
                    paste and powder, lead concentrate and mini blast-furnace slag
                    recovering lead efficiently in a single production cycle with
                    minimal melting losses.
                  </p>
                  <p>
                    Every installation is engineered around your feedstock, batch
                    capacity, throughput and fuel economics, with systems ranging
                    from 500 kg to 10 tonnes per batch. A matched multi-stage air
                    pollution control system is supplied with the furnace to support
                    effective emission control from day one.
                  </p>
                </div>

                {/* SPECIFICATION PILLS */}
                <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    "Rotating Shell",
                    "Riding Rings & Steel Rollers",
                    "Fire-Brick / High-Alumina Refractory",
                    "Central Tapping Hole",
                  ].map((feat, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-primary/30 bg-primary/5 px-4 py-3 text-center text-xs md:text-sm font-bold text-white uppercase tracking-wider"
                    >
                      {feat}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 1 — PAIN POINTS */}
          <section className="relative overflow-hidden py-24 w-full">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={SECTION_BG_URL}
                alt="Lead smelting operation challenges"
                fill
                className="object-cover"
              />
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/75" />

            {/* Background Grid */}
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:60px_60px]" />

            <div className="container relative z-10 mx-auto max-w-7xl px-4">
              <div className="text-center space-y-4 max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 rounded-full border border-destructive/30 bg-destructive/10 px-4 py-1.5 text-xs md:text-sm font-semibold text-destructive">
                  <AlertTriangle className="h-4 w-4" />
                  Operational Challenges
                </div>

                <h2 className="text-3xl md:text-4xl font-bold leading-tight text-primary">
                  Is Your Smelting Operation Costing You More Than It Recovers?
                </h2>

                <p className="text-lg text-white/80">
                  Three problems can directly impact recovery, fuel cost and
                  compliance on a lead recycling floor.
                </p>
              </div>

              {/* Cards */}
              <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-3">
                {[
                  {
                    title: "Lead Lost to Melting Losses",
                    desc: "Poor thermal control and unsuitable charge cycles can leave recoverable lead behind in slag and dross reducing recovery on every batch.",
                  },
                  {
                    title: "Fuel Burnt, Not Converted to Output",
                    desc: "Heat loss, inadequate refractory and mismatched burners increase fuel consumption and melting time, raising your cost per tonne.",
                  },
                  {
                    title: "Emissions That Put Your Consent at Risk",
                    desc: "Lead-bearing flue gases and fugitive fumes from charging and tapping need effective capture and treatment to protect compliance and workplace air quality.",
                  },
                ].map((item, i) => (
                  <Card
                    key={i}
                    className="rounded-3xl border border-white/10 bg-slate-800/90 shadow-2xl backdrop-blur-sm flex flex-col justify-between"
                  >
                    <CardContent className="p-8 space-y-5">
                      <div className="h-1.5 w-16 rounded-full bg-primary" />

                      <h3 className="text-xl font-bold leading-snug text-white">
                        {item.title}
                      </h3>

                      <p className="leading-relaxed text-white/70 text-base italic">
                        {item.desc}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 2 — SIX ADVANTAGES */}
          <section className="py-24 bg-white w-full">
            <div className="container mx-auto px-4 max-w-7xl">
              {/* HEADING */}
              <div className="text-center space-y-4 max-w-4xl mx-auto">
                <div className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs md:text-sm font-semibold text-primary">
                  Proven Performance
                </div>

                <h2 className="text-3xl md:text-4xl font-bold leading-tight text-primary">
                  Six Advantages That Set Continental Rotary Furnaces Apart
                </h2>

                <p className="text-lg text-slate-600">
                  Purpose-built batch furnaces combining targeted design, energy
                  efficiency and environmental control.
                </p>
              </div>

              {/* GRID */}
              <div className="mt-16 grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
                {[
                  {
                    number: "01",
                    title: "Fuel Flexibility",
                    icon: Flame,
                    desc: "Oil or gas burner systems conventional or automatic selected around your fuel availability and operating economics.",
                  },
                  {
                    number: "02",
                    title: "Single-Cycle Lead Recovery",
                    icon: Recycle,
                    desc: "Rotary melting is designed to recover lead from the charge in one production cycle, reducing rework and improving throughput.",
                  },
                  {
                    number: "03",
                    title: "Robust Construction",
                    icon: ShieldCheck,
                    desc: "Heavy-duty mild-steel shell with suitable fire-brick or high-alumina refractory, rotating at 1–2 RPM for uniform heat distribution.",
                  },
                  {
                    number: "04",
                    title: "Raw Material Flexibility",
                    icon: Layers,
                    desc: "Process battery plates, powder, lead concentrate, non-ferrous feedstock and mini blast-furnace slag on one rotary platform.",
                  },
                  {
                    number: "05",
                    title: "Scalable: 500 kg to 10 Tonnes",
                    icon: Gauge,
                    desc: "Capacity options ranging from compact recovery units to large industrial smelting systems, allowing capacity to grow with your production.",
                  },
                  {
                    number: "06",
                    title: "End-to-End Support",
                    icon: Wrench,
                    desc: "Complete support covering design, manufacturing, installation and commissioning, backed by ISO-certified processes and post-handover service.",
                  },
                ].map((item, i) => (
                  <Card
                    key={i}
                    className="rounded-3xl border border-slate-200 bg-slate-800 text-white shadow-xl hover:border-primary/50 transition-colors"
                  >
                    <CardContent className="p-8 space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary">
                          Advantage {item.number}
                        </div>
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-2xl font-bold leading-tight text-white">
                          {item.title}
                        </h3>

                        <p className="text-white/80 leading-relaxed text-sm md:text-base">
                          {item.desc}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* BOTTOM CTA */}
              <div className="mt-16 flex justify-center">
                <Button
                  className="bg-primary hover:bg-primary/90 text-white font-bold px-10 h-14 rounded-xl text-base"
                  onClick={scrollToLeadForm}
                >
                  GET FREE QUOTE →
                </Button>
              </div>
            </div>
          </section>

          {/* SECTION 3 — STEP-BY-STEP PROCESS FLOW */}
          <section className="relative overflow-hidden bg-slate-900 py-24 text-white w-full border-t border-white/10">
            <div className="container relative z-10 mx-auto max-w-7xl px-4">
              <div className="text-center space-y-4 max-w-4xl mx-auto">
                <div className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs md:text-sm font-semibold text-primary uppercase tracking-wider">
                  Production Workflow
                </div>

                <h2 className="text-3xl md:text-4xl font-bold leading-tight text-primary">
                  From Scrap to Cast Ingot — Step by Step
                </h2>

                <p className="text-lg text-white/75">
                  A high-efficiency smelting cycle engineered for maximum recovery,
                  operator safety, and compliance.
                </p>
              </div>

              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {[
                  {
                    step: "01",
                    title: "Charging",
                    desc: "Scrap and additives are loaded through the movable front-end door using manual, vibro, forklift or rotary loading systems.",
                  },
                  {
                    step: "02",
                    title: "Rotary Melting",
                    desc: "An oil or gas burner heats the charge while the lined furnace shell rotates at 1–2 RPM for uniform heat transfer.",
                  },
                  {
                    step: "03",
                    title: "Tapping",
                    desc: "The central tapping hole allows molten lead and slag to be discharged cleanly without disturbing the furnace cycle.",
                  },
                  {
                    step: "04",
                    title: "Casting",
                    desc: "Molten lead is collected in 500 kg jumbo ingot moulds, using SG iron moulds on trolley-type structures for smooth pouring.",
                  },
                  {
                    step: "05",
                    title: "Gas Treatment",
                    desc: "Flue gases move from the furnace exhaust into the multi-stage air pollution control system before controlled release.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="relative rounded-2xl border border-white/10 bg-slate-800/80 p-6 flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="text-4xl font-black text-primary/40 tracking-wider">
                        {item.step}
                      </div>

                      <h3 className="text-xl font-bold text-white">
                        {item.title}
                      </h3>

                      <p className="text-sm text-white/70 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center text-xs text-primary font-semibold">
                      Step {item.step} of 05
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 4 — EIGHT STAGES OF AIR POLLUTION CONTROL */}
          <section className="relative overflow-hidden bg-slate-100 py-24 w-full">
            <div className="container relative z-10 mx-auto max-w-7xl px-4">
              <div className="text-center space-y-4 max-w-4xl mx-auto">
                <div className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs md:text-sm font-semibold text-primary">
                  Clean Air Technology
                </div>

                <h2 className="text-3xl md:text-4xl font-bold leading-tight text-primary">
                  Eight Stages of Air Pollution Control
                </h2>

                <p className="text-lg text-slate-700">
                  An integrated APCS designed to capture dust, lead oxides and other
                  impurities generated during secondary lead melting.
                </p>
              </div>

              {/* 8 STAGES GRID */}
              <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    stage: "I",
                    title: "Rotary Chamber",
                    desc: "Equalises hot furnace gases, reduces temperature and settles coarse particulate.",
                    icon: RotateCw,
                  },
                  {
                    stage: "II",
                    title: "Ducts & Bends",
                    desc: "Aerodynamically designed gas conveyance with manhole access for cleaning and maintenance.",
                    icon: Wind,
                  },
                  {
                    stage: "III",
                    title: "Gravity Chamber",
                    desc: "Settles larger particles while further cooling the gas and providing spark arresting.",
                    icon: Layers,
                  },
                  {
                    stage: "IV",
                    title: "Involute Cyclone",
                    desc: "Removes medium-sized particles, with collected dust discharged from the cyclone base.",
                    icon: Filter,
                  },
                  {
                    stage: "V",
                    title: "Bag Filtration",
                    desc: "Pulse-jet bag house filtration captures fine dust particulate before final treatment.",
                    icon: Filter,
                  },
                  {
                    stage: "VI",
                    title: "Wet Scrubber",
                    desc: "Water spray and mist elimination remove remaining pollutants, supported by pump, pipeline and retention tank.",
                    icon: Droplets,
                  },
                  {
                    stage: "VII",
                    title: "ID Fan & Stack",
                    desc: "The induced-draught fan overcomes system resistance while the chimney discharges treated gas.",
                    icon: Wind,
                  },
                  {
                    stage: "VIII",
                    title: "Fugitive Emissions Control",
                    desc: "Captures emissions generated during charging and tapping to improve workplace air quality.",
                    icon: ShieldCheck,
                  },
                ].map((item, i) => (
                  <Card
                    key={i}
                    className="rounded-2xl border border-slate-200 bg-white shadow-md hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 font-bold text-primary text-sm">
                          {item.stage}
                        </div>
                        <item.icon className="h-5 w-5 text-slate-400" />
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 leading-snug">
                        {item.title}
                      </h3>

                      <p className="text-sm text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* APCS Trust Note */}
              <div className="mt-12 text-center">
                <p className="text-sm md:text-base text-slate-600 font-medium">
                  Furnace & APCS are engineered together to meet state pollution
                  control board (SPCB) norms and emission standards.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 5 — WHAT GETS PROCESSED */}
          <section className="relative overflow-hidden bg-white py-24 w-full">
            <div className="container relative z-10 mx-auto max-w-7xl px-4">
              <div className="text-center space-y-4 max-w-4xl mx-auto">
                <div className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs md:text-sm font-semibold text-primary">
                  Feedstock Versatility
                </div>

                <h2 className="text-3xl md:text-4xl font-bold leading-tight text-primary">
                  What Gets Processed in a Continental Lead Recycling Furnace?
                </h2>

                <p className="text-lg text-slate-600">
                  Custom-engineered rotary systems capable of processing diverse
                  feedstocks and scrap profiles.
                </p>
              </div>

              {/* FEEDSTOCK GRID */}
              <div className="mt-16 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    icon: Battery,
                    title: "Scrap Battery Plates",
                    desc: "Grids and plates recovered from end-of-life lead-acid batteries, charged directly into the rotary furnace.",
                  },
                  {
                    icon: Filter,
                    title: "Battery Paste & Powder",
                    desc: "Fine lead-bearing paste and powder processed through controlled rotary melting.",
                  },
                  {
                    icon: Boxes,
                    title: "Lead Concentrate",
                    desc: "Concentrate can be charged alongside scrap for blended feed and consistent output.",
                  },
                  {
                    icon: Factory,
                    title: "Mini Blast Furnace Slag",
                    desc: "Reprocess slag to recover lead that would otherwise be lost as waste.",
                  },
                  {
                    icon: Recycle,
                    title: "Other Non-Ferrous Metals",
                    desc: "The rotary platform can support a range of non-ferrous metal recycling applications.",
                  },
                  {
                    icon: Settings,
                    title: "Your Own Charge Mix",
                    desc: "Share your feedstock analysis and target output, we will specify the furnace, burner and APCS accordingly.",
                  },
                ].map((item, i) => (
                  <Card
                    key={i}
                    className="rounded-3xl border border-slate-200 bg-slate-800 shadow-xl text-white"
                  >
                    <CardContent className="p-8 space-y-5">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                        <item.icon
                          className="h-7 w-7 text-primary"
                          strokeWidth={2.2}
                        />
                      </div>

                      <h3 className="text-2xl font-bold leading-snug text-white">
                        {item.title}
                      </h3>

                      <p className="leading-relaxed text-white/80 italic text-base">
                        {item.desc}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 6 — WHY LEAD RECYCLERS CHOOSE CONTINENTAL */}
          <section className="relative overflow-hidden bg-slate-900 py-24 text-white w-full border-t border-white/10">
            <div className="container relative z-10 mx-auto max-w-7xl px-4">
              <div className="text-center space-y-4 max-w-4xl mx-auto">
                <div className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs md:text-sm font-semibold text-primary uppercase tracking-wider">
                  The Continental Advantage
                </div>

                <h2 className="text-3xl md:text-4xl font-bold leading-tight text-primary">
                  Why Lead Recyclers Across India Choose Continental
                </h2>

                <p className="text-lg text-white/75">
                  Trusted industrial engineering with nearly four decades of
                  manufacturing excellence.
                </p>
              </div>

              {/* REASONS GRID */}
              <div className="mt-16 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    icon: Factory,
                    title: "Manufacturing Since 1987",
                    desc: "Nearly four decades of rotary furnace engineering, from individual units to complete smelting plants.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "ISO 9001 & ISO 14001 Certified",
                    desc: "Certified quality and environmental management systems supporting consistent manufacturing and environmental practices.",
                  },
                  {
                    icon: Award,
                    title: "Recognised & Affiliated",
                    desc: "MSME ZED Bronze certified, with memberships of FIEO, MRAI and BMR.",
                  },
                  {
                    icon: Building2,
                    title: "Two Manufacturing Plants",
                    desc: "Two manufacturing facilities in Faridabad, Haryana, with fabrication, assembly and dispatch under direct supervision.",
                  },
                  {
                    icon: CheckCircle2,
                    title: "Furnace + APCS Together",
                    desc: "One supplier for the melting furnace and pollution control train, engineered as one integrated system.",
                  },
                  {
                    icon: Zap,
                    title: "Designed & Made in India",
                    desc: "Local manufacturing enables shorter lead times, accessible spares and responsive engineering support.",
                  },
                ].map((item, i) => (
                  <Card
                    key={i}
                    className="rounded-3xl border border-white/10 bg-slate-800/80 shadow-2xl backdrop-blur-sm"
                  >
                    <CardContent className="p-8 space-y-5">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                        <item.icon
                          className="h-7 w-7 text-primary"
                          strokeWidth={2.2}
                        />
                      </div>

                      <h3 className="text-xl font-bold leading-snug text-white">
                        {item.title}
                      </h3>

                      <p className="leading-relaxed text-white/75 text-sm md:text-base">
                        {item.desc}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* FINAL CTA SECTION */}
          <section
            id="bottom-form"
            className="py-24 bg-slate-100 relative overflow-hidden w-full border-t border-slate-200"
          >
            <div className="container mx-auto px-4 max-w-7xl relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-[48%_52%] gap-14 items-start">
                {/* LEFT CONTENT */}
                <div className="space-y-8 pt-6">
                  <div className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs md:text-sm font-semibold text-primary">
                    Custom Technical Proposal
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight uppercase">
                    Tell Us Your Charge Mix and Capacity
                  </h2>

                  <p className="text-lg text-slate-800 leading-relaxed">
                    Our furnace engineers will prepare a custom technical
                    proposal covering:
                  </p>

                  {/* PROPOSAL INCLUSIONS */}
                  <div className="space-y-3">
                    {[
                      "BATCH CAPACITY",
                      "FUEL CONSUMPTION ESTIMATE",
                      "APCS CONFIGURATION",
                      "PLANT LAYOUT",
                      "INDICATIVE PRICE",
                    ].map((badge, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 text-slate-800 font-semibold text-sm md:text-base"
                      >
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                        <span>{badge}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-base text-slate-700 leading-relaxed">
                    Send us what you process today and what you want to produce.
                    We’ll tell you what the plant needs to look like.
                  </p>

                  <div className="p-4 rounded-xl bg-white border border-primary/20 shadow-sm">
                    <p className="font-bold text-primary text-base md:text-lg uppercase">
                      No Obligation. Straight Answers From Engineers.
                    </p>
                  </div>
                </div>

                {/* RIGHT FORM */}
                <div className="w-full" id="top-form-mobile">
                  <LeadForm
                    title="Request Lead Smelting Proposal"
                    subtitle="Receive your technical specs and indicative pricing within 24 hours."
                  />
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* FOOTER */}
        <footer className="bg-slate-900 text-white pt-8 pb-28 lg:py-8 w-full border-t border-white/10">
          <div className="container mx-auto px-4 max-w-7xl text-center text-sm text-white/60">
            <p>
              © {new Date().getFullYear()} Continental Furnaces. All Rights
              Reserved.
            </p>
          </div>
        </footer>

        {/* MOBILE STICKY CTA */}
        <div className="fixed bottom-0 left-0 right-0 z-30 lg:hidden p-4 bg-white border-t shadow-[0_-4px_10px_rgba(0,0,0,0.1)] flex gap-2 w-screen">
          <div className="w-full flex gap-2 max-w-7xl mx-auto px-4">
            <Button
              className="flex-1 bg-primary hover:bg-primary/90 text-white font-bold h-12"
              onClick={scrollToLeadForm}
            >
              REQUEST FREE QUOTE NOW
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}