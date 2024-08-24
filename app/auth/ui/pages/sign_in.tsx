import React from 'react'
import AuthLayout from '#auth/ui/components/auth_layout'
import Label from '#common/ui/components/label'
import Input from '#common/ui/components/input'
import Link from '#common/ui/components/link'
import Error from '#common/ui/components/error'
import Button from '#common/ui/components/button'
import { useForm } from '@inertiajs/react'

export default function SignIn() {
  const form = useForm({
    email: '',
    password: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    form.post('/auth/sign_in')
  }

  const fillDevelopmentValues = () => {
    form.setData({
      email: 'paul@valery.fr',
      password: 'La Jeune Parque',
    })
  }

  return (
    <AuthLayout
      title="Sign in to your account."
      description="Welcome back! Please sign in to continue."
    >
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Email field */}
        <div>
          <Label htmlFor="email">Email address</Label>
          <Input
            className="w-full"
            id="email"
            name="email"
            type="email"
            placeholder="john.doe@example.com"
            required
            autoFocus
            autoComplete="email"
            value={form.data.email}
            onChange={(e) => form.setData('email', e.target.value)}
          />
          <Error errorKey="email" />
        </div>

        {/* Password field */}
        <div>
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <Link href="/auth/forgot_password">Forgot password?</Link>
          </div>
          <Input
            className="w-full"
            id="password"
            name="password"
            type="password"
            required
            autoComplete="current-password"
            placeholder="••••••••••••••••••••"
            value={form.data.password}
            onChange={(e) => form.setData('password', e.target.value)}
          />
          <Error errorKey="password" />
        </div>

        <Error errorKey="auth" />

        <Button className="w-full" type="submit" loading={form.processing}>
          Sign in
        </Button>

        {process.env.NODE_ENV === 'development' && (
          <Button
            className="w-full"
            variant="secondary"
            type="button"
            onClick={fillDevelopmentValues}
          >
            Fill Development Values
          </Button>
        )}
      </form>

      <p className="mt-6 text-center text-sm text-neutral-500">
        Not a member? <Link href="/auth/sign_up">Sign up</Link>
      </p>
    </AuthLayout>
  )
}
