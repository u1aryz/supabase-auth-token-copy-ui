import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL;
const anon = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(url, anon);

export function login() {
	return supabase.auth.signInWithOAuth({
		provider: "google",
		options: {
			queryParams: {
				prompt: "select_account",
			},
		},
	});
}

export function logout() {
	return supabase.auth.signOut();
}
