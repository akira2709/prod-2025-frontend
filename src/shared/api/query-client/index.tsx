"use client"
import { useState } from "react";
import { HydrationBoundary, QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const QueryProvider = (props: {children: React.ReactNode}) => {
	const [client] = useState(() => new QueryClient())
	return (
		<QueryClientProvider client={client}>
			<HydrationBoundary>
				{props.children}
			</HydrationBoundary>
		</QueryClientProvider>
	)
}
