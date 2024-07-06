'use client'

import '@/services/amplify/setup'

import { QueryClientProvider, QueryClient } from "@tanstack/react-query"

const client = new QueryClient()

export default function GuestLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <QueryClientProvider client={client}>
      {children}
    </QueryClientProvider>
  )
}
