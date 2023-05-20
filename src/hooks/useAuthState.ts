import { useEffect, useState } from "react";
import { supabase } from "@/supabase.ts";
import { Session } from "@supabase/supabase-js";

export const useAuthState = () => {
	const [session, setSession] = useState<Session | null>();

	useEffect(() => {
		const { data: authListener } = supabase.auth.onAuthStateChange(
			(_event, session) => {
				setSession(session);
			},
		);
		return () => {
			authListener.subscription.unsubscribe();
		};
	}, []);

	return session;
};
