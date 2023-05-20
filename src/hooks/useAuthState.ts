import { useCallback, useEffect, useState } from "react";
import { supabase } from "@/supabase.ts";
import { Session } from "@supabase/supabase-js";

type AuthStateHook = [
	Session | null | undefined,
	() => void,
	Error | undefined,
];

export const useAuthState = (): AuthStateHook => {
	const [session, setSession] = useState<Session | null>();
	const [error, setError] = useState();

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

	const refresh = useCallback(() => {
		supabase.auth.refreshSession().catch(setError);
	}, []);

	return [session, refresh, error];
};
