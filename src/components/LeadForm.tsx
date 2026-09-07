"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { Loader2, ArrowRight, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { submitToHubSpot } from "@/app/actions/hubspot"

type FormValues = {
  name: string
  email: string
  phone: string
  company_name: string
  budget: string
  custom_requirement: string
  lead_source: string
}

type FormErrors = Partial<Record<keyof FormValues, string>> & {
  submit?: string
}

type LeadFormProps = {
  className?: string
  title?: string
  subtitle?: string
  buttonText?: string
  bottomText?: React.ReactNode
  buttonclassName?: string
}

const defaultValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  company_name: "",
  budget: "",
  custom_requirement: "",
  lead_source: "LEAD SMELTING LP",
}

const BUDGET_OPTIONS = [
  "20 Lakh - 50 Lakh",
  "50 Lakh - 1 Cr",
  "1 Cr +",
]

export default function LeadForm({
  className,
  title = "Get a Free Consultation",
  subtitle = "Discuss your furnace requirement with our engineers.",
  buttonText = "GET A FREE QUOTE →",
  buttonclassName = "",
  bottomText = <></>,
}: LeadFormProps) {
  const router = useRouter()

  const [step, setStep] = useState<1 | 2>(1)
  const [values, setValues] = useState<FormValues>(defaultValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    const { name, value } = event.target

    let formattedValue = value

    // Restrict phone number strictly to 10 digits max
    if (name === "phone") {
      formattedValue = value.replace(/\D/g, "").slice(0, 10)
    }

    setValues((current) => ({
      ...current,
      [name]: formattedValue,
    }))

    setErrors((current) => ({
      ...current,
      [name]: undefined,
      submit: undefined,
    }))
  }

  function validateStep1(): boolean {
    const newErrors: FormErrors = {}

    if (values.name.trim().length < 2) {
      newErrors.name = "Please enter your full name (at least 2 characters)."
    }

    if (!values.email.trim()) {
      newErrors.email = "Email address is required."
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      newErrors.email = "Please enter a valid email address."
    }

    const phoneDigits = values.phone.replace(/\D/g, "")
    if (!phoneDigits) {
      newErrors.phone = "Phone number is required."
    } else if (phoneDigits.length !== 10) {
      newErrors.phone = "Phone number must be exactly 10 digits."
    } else if (!/^[6-9]\d{9}$/.test(phoneDigits)) {
      newErrors.phone = "Please enter a valid 10-digit Indian phone number."
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function validateStep2(): boolean {
    const newErrors: FormErrors = {}

    if (values.company_name.trim().length < 2) {
      newErrors.company_name = "Please enter your company name."
    }

    if (!values.budget) {
      newErrors.budget = "Please select an estimated budget."
    }

    // custom_requirement is optional per user request

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  async function handleStep1Submit(event: React.FormEvent) {
    event.preventDefault()

    if (!validateStep1()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Immediate partial lead sync to HubSpot
      const result = await submitToHubSpot({
        name: values.name.trim(),
        email: values.email.trim(),
        phone: values.phone.trim(),
        lead_source: "LEAD SMELTING LP (Step 1 Completed)",
      })

      if (!result.success) {
        console.warn("HubSpot Step 1 Sync notice:", result.error)
      }

      setStep(2)
    } catch (error) {
      console.error("Step 1 Submission error:", error)
      setStep(2)
    } finally {
      setIsSubmitting(false)
    }
  }

  async function handleStep2Submit(event: React.FormEvent) {
    event.preventDefault()

    if (!validateStep2()) {
      return
    }

    setIsSubmitting(true)

    try {
      const result = await submitToHubSpot({
        name: values.name.trim(),
        email: values.email.trim(),
        phone: values.phone.trim(),
        company_name: values.company_name.trim(),
        budget: values.budget,
        custom_requirement: values.custom_requirement.trim(),
        lead_source: "LEAD SMELTING LP",
      })

      if (!result.success) {
        console.warn("HubSpot Step 2 Sync notice:", result.error)
      }

      router.push("/thank-you")
    } catch (error) {
      console.error("Step 2 Submission error:", error)
      setErrors({
        submit:
          "We encountered a problem submitting your request. Please try again.",
      })
      setIsSubmitting(false)
    }
  }

  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white p-6 shadow-2xl md:p-8 ${className}`}
    >
      {/* STEP PROGRESS INDICATOR */}
      <div className="mb-5">
        <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
          <span>
            {step === 1
              ? "Step 1 of 2: Contact Information"
              : "Step 2 of 2: Company & Requirements"}
          </span>
          <span className="text-primary font-bold">
            {step === 1 ? "Step 1/2" : "Step 2/2"}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="h-1.5 rounded-full bg-primary" />
          <div
            className={`h-1.5 rounded-full transition-colors duration-300 ${
              step === 2 ? "bg-primary" : "bg-slate-200"
            }`}
          />
        </div>
      </div>

      {/* HEADER */}
      <div className="mb-6">
        <h3 className="text-left text-xl md:text-2xl font-bold text-primary leading-tight">
          {step === 1 ? title : "Project & Requirement Details"}
        </h3>
        <p className="mt-1 text-left text-sm text-muted-foreground leading-relaxed">
          {step === 1
            ? subtitle
            : "Tell us about your organization and requirements for an accurate proposal."}
        </p>
      </div>

      {/* STEP 1 FORM */}
      {step === 1 ? (
        <form onSubmit={handleStep1Submit} className="space-y-4" noValidate>
          {/* FULL NAME */}
          <div className="space-y-1.5">
            <label
              htmlFor="name"
              className="text-sm font-semibold text-black"
            >
              Full Name *
            </label>
            <input
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
              placeholder="e.g. Rajesh Sharma"
              autoComplete="name"
              className="flex h-12 w-full rounded-xl border border-input bg-white px-4 py-2 text-sm text-black placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
            />
            {errors.name && (
              <p className="text-xs text-destructive font-medium">
                {errors.name}
              </p>
            )}
          </div>

          {/* EMAIL */}
          <div className="space-y-1.5">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-black"
            >
              Email Address *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              placeholder="e.g. rajesh@company.com"
              autoComplete="email"
              className="flex h-12 w-full rounded-xl border border-input bg-white px-4 py-2 text-sm text-black placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
            />
            {errors.email && (
              <p className="text-xs text-destructive font-medium">
                {errors.email}
              </p>
            )}
          </div>

          {/* PHONE (Indian 10-digit without ISD) */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label
                htmlFor="phone"
                className="text-sm font-semibold text-black"
              >
                Phone Number *
              </label>
              <span className="text-xs text-muted-foreground font-normal">
                10-digit Indian standard
              </span>
            </div>
            <div className="flex rounded-xl border border-input bg-white overflow-hidden focus-within:ring-2 focus-within:ring-secondary">
              <span className="flex items-center bg-slate-50 px-3.5 text-sm font-medium text-slate-600 border-r border-input select-none">
                +91
              </span>
              <input
                id="phone"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                placeholder="98765 43210"
                maxLength={10}
                autoComplete="tel"
                inputMode="numeric"
                className="flex h-12 w-full border-0 border-none bg-transparent px-4 py-2 text-sm text-black placeholder:text-muted-foreground focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
              />
            </div>
            {errors.phone && (
              <p className="text-xs text-destructive font-medium">
                {errors.phone}
              </p>
            )}
          </div>

          {errors.submit && (
            <p className="rounded-xl border border-destructive/20 bg-destructive/5 px-4 py-3 text-xs text-destructive">
              {errors.submit}
            </p>
          )}

          {/* STEP 1 CTA */}
          <Button
            type="submit"
            className={`h-14 w-full bg-primary text-base font-bold text-white hover:bg-primary/90 rounded-xl transition-all ${buttonclassName}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Saving Details...
              </>
            ) : (
              <span className="flex items-center justify-center gap-2">
                CONTINUE TO STEP 2
                <ArrowRight className="h-4 w-4" />
              </span>
            )}
          </Button>

          <p className="text-center text-xs leading-relaxed text-muted-foreground pt-1">
            🔒 Your contact details are kept strictly confidential.
          </p>
        </form>
      ) : (
        /* STEP 2 FORM */
        <form onSubmit={handleStep2Submit} className="space-y-4" noValidate>
          {/* COMPANY NAME */}
          <div className="space-y-1.5">
            <label
              htmlFor="company_name"
              className="text-sm font-semibold text-black"
            >
              Company Name *
            </label>
            <input
              id="company_name"
              name="company_name"
              value={values.company_name}
              onChange={handleChange}
              placeholder="e.g. Apex Metals Pvt Ltd"
              className="flex h-12 w-full rounded-xl border border-input bg-white px-4 py-2 text-sm text-black placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
            />
            {errors.company_name && (
              <p className="text-xs text-destructive font-medium">
                {errors.company_name}
              </p>
            )}
          </div>

          {/* BUDGET DROPDOWN */}
          <div className="space-y-1.5">
            <label
              htmlFor="budget"
              className="text-sm font-semibold text-black"
            >
              Estimated Budget *
            </label>
            <div className="relative">
              <select
                id="budget"
                name="budget"
                value={values.budget}
                onChange={handleChange}
                className="flex h-12 w-full rounded-xl border border-input bg-white px-4 py-2 text-sm text-black placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary appearance-none cursor-pointer"
              >
                <option value="" disabled>
                  Select budget range
                </option>
                {BUDGET_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                <svg
                  className="h-4 w-4 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
            {errors.budget && (
              <p className="text-xs text-destructive font-medium">
                {errors.budget}
              </p>
            )}
          </div>

          {/* CUSTOM REQUIREMENT (OPTIONAL) */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label
                htmlFor="custom_requirement"
                className="text-sm font-semibold text-black"
              >
                Custom Requirement
              </label>
              <span className="text-slate-400 font-normal text-xs">
                (optional)
              </span>
            </div>
            <textarea
              id="custom_requirement"
              name="custom_requirement"
              rows={3}
              value={values.custom_requirement}
              onChange={handleChange}
              placeholder="e.g. 5 Ton Bogie Hearth, operating temp 600°C, forced air circulation..."
              placeholder="e.g. 3 Ton Rotary Lead Furnace with APCS, processing battery scrap..."
              className="flex w-full rounded-xl border border-input bg-white p-3 text-sm text-black placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary resize-none"
            />
          </div>

          {errors.submit && (
            <p className="rounded-xl border border-destructive/20 bg-destructive/5 px-4 py-3 text-xs text-destructive">
              {errors.submit}
            </p>
          )}

          {/* STEP 2 ACTIONS */}
          <div className="flex items-center gap-3 pt-1">
            <Button
              type="button"
              variant="secondary"
              onClick={() => {
                setErrors({})
                setStep(1)
              }}
              disabled={isSubmitting}
              className="h-14 px-5 bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold rounded-xl transition-all shadow-sm"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back
            </Button>
            <Button
              type="submit"
              className={`h-14 flex-1 bg-primary text-base font-bold text-white hover:bg-primary/90 rounded-xl transition-all ${buttonclassName}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                buttonText
              )}
            </Button>
          </div>

          <p className="text-center text-xs leading-relaxed text-muted-foreground">
            {bottomText}
          </p>
        </form>
      )}
    </div>
  )
}
