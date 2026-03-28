'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { ContactFormData } from '@/types'

interface ContactFormProps {
  compact?: boolean
}

export function ContactForm({ compact = false }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({})

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleBlur = (field: keyof ContactFormData) => {
    const newErrors = { ...errors }
    if (!formData[field]?.trim()) {
      newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`
    } else if (field === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors[field] = 'Please enter a valid email'
    } else {
      delete newErrors[field]
    }
    setErrors(newErrors)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('submitting')
    // Simulate form submission
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    }, 1000)
  }

  if (status === 'success') {
    return (
      <Card className={`${compact ? 'p-5' : 'p-6'} shadow-xl border-0 bg-white/90 dark:bg-white/5 backdrop-blur-xl`}>
        <div className="text-center py-8" role="status" aria-live="polite">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8 text-green-600" aria-hidden="true" />
          </div>
          <h3 className="text-xl font-display font-bold text-black dark:text-white mb-2">Message Sent!</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Thank you for your inquiry. We&apos;ll contact you shortly.
          </p>
        </div>
      </Card>
    )
  }

  const suffix = compact ? '-compact' : ''

  return (
    <Card className={`${compact ? 'p-5' : 'p-6'} shadow-xl border-0 bg-white/90 dark:bg-white/5 backdrop-blur-xl`}>
      <h3 className={`${compact ? 'text-lg' : 'text-xl'} font-display font-bold text-black dark:text-white mb-4`}>
        Send Us a Message
      </h3>
      <form onSubmit={handleSubmit} className={compact ? 'space-y-3' : 'space-y-4'} noValidate>
        {compact ? (
          <>
            <FormField
              id={`name${suffix}`}
              label="Name"
              srOnly
              placeholder="Your name"
              value={formData.name}
              onChange={(v) => setFormData({ ...formData, name: v })}
              onBlur={() => handleBlur('name')}
              error={errors.name}
              autoComplete="name"
            />
            <FormField
              id={`phone${suffix}`}
              label="Phone"
              srOnly
              type="tel"
              placeholder="Your phone number"
              value={formData.phone}
              onChange={(v) => setFormData({ ...formData, phone: v })}
              onBlur={() => handleBlur('phone')}
              error={errors.phone}
              autoComplete="tel"
              inputMode="tel"
            />
            <FormField
              id={`email${suffix}`}
              label="Email"
              srOnly
              type="email"
              placeholder="Your email"
              value={formData.email}
              onChange={(v) => setFormData({ ...formData, email: v })}
              onBlur={() => handleBlur('email')}
              error={errors.email}
              autoComplete="email"
              inputMode="email"
            />
            <div>
              <label htmlFor={`message${suffix}`} className="sr-only">Message</label>
              <Textarea
                id={`message${suffix}`}
                placeholder="What vehicle are you looking for?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                onBlur={() => handleBlur('message')}
                className={`min-h-[80px] resize-none ${errors.message ? 'border-red-500' : ''}`}
                required
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? `message-error${suffix}` : undefined}
              />
              {errors.message && (
                <p id={`message-error${suffix}`} className="text-red-500 text-xs mt-1" role="alert">
                  {errors.message}
                </p>
              )}
            </div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-4">
              <FormField
                id={`name${suffix}`}
                label="Name"
                placeholder="Your name"
                value={formData.name}
                onChange={(v) => setFormData({ ...formData, name: v })}
                onBlur={() => handleBlur('name')}
                error={errors.name}
                autoComplete="name"
              />
              <FormField
                id={`phone${suffix}`}
                label="Phone"
                type="tel"
                placeholder="Your phone"
                value={formData.phone}
                onChange={(v) => setFormData({ ...formData, phone: v })}
                onBlur={() => handleBlur('phone')}
                error={errors.phone}
                autoComplete="tel"
                inputMode="tel"
              />
            </div>
            <FormField
              id={`email${suffix}`}
              label="Email"
              type="email"
              placeholder="Your email"
              value={formData.email}
              onChange={(v) => setFormData({ ...formData, email: v })}
              onBlur={() => handleBlur('email')}
              error={errors.email}
              autoComplete="email"
              inputMode="email"
            />
            <div>
              <label htmlFor={`message${suffix}`} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <Textarea
                id={`message${suffix}`}
                placeholder="Tell us what vehicle you're looking for..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                onBlur={() => handleBlur('message')}
                className={`min-h-[100px] resize-none ${errors.message ? 'border-red-500' : ''}`}
                required
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? `message-error${suffix}` : undefined}
              />
              {errors.message && (
                <p id={`message-error${suffix}`} className="text-red-500 text-xs mt-1" role="alert">
                  {errors.message}
                </p>
              )}
            </div>
          </>
        )}
        <Button
          type="submit"
          disabled={status === 'submitting'}
          className={`w-full bg-[#E53935] hover:bg-[#C62828] text-white ${compact ? 'h-11' : 'h-12'} font-semibold btn-luxury`}
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
            </>
          )}
        </Button>
      </form>
    </Card>
  )
}

interface FormFieldProps {
  id: string
  label: string
  srOnly?: boolean
  type?: string
  placeholder: string
  value: string
  onChange: (value: string) => void
  onBlur: () => void
  error?: string
  autoComplete?: string
  inputMode?: 'text' | 'tel' | 'email' | 'numeric'
}

function FormField({
  id,
  label,
  srOnly = false,
  type = 'text',
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  autoComplete,
  inputMode,
}: FormFieldProps) {
  return (
    <div>
      <label htmlFor={id} className={srOnly ? 'sr-only' : 'block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'}>
        {label}
      </label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        className={`h-11 ${error ? 'border-red-500' : ''}`}
        autoComplete={autoComplete}
        inputMode={inputMode}
        required
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <p id={`${id}-error`} className="text-red-500 text-xs mt-1" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
