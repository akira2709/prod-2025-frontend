import { NextResponse, type NextRequest } from "next/server";
import { Fetch } from "../use-fetch";

type Role = null | "client" | "partner"

export const middleware = async (request: NextRequest) => {
	const token = localStorage.getItem("token")
	const role: Role = await Fetch({
		endpoint: "/client/auth/check-token"
	})
	switch (role) {
		case "client":
			return NextResponse.redirect(new URL("/client"))
	}
	return NextResponse.redirect(new URL("/client", request.url))
}

export const config = {
	mather: "/:path"
}
