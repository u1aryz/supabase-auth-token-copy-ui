import { useAuthState } from "@/hooks/useAuthState.ts";
import {
	Button,
	Container,
	Flex,
	Textarea,
	Text,
	CopyButton,
} from "@mantine/core";
import { login, logout } from "@/supabase.ts";
import { FaGoogle, FaCheck, FaCopy } from "react-icons/fa";
import Popconfirm from "@/components/Popconfirm.tsx";
import GitHubCorner from "@/components/GitHubCorner.tsx";

function App() {
	const session = useAuthState();

	return (
		<Container py={30} size="sm">
			<Flex direction="column" gap="sm">
				<Button onClick={login} color="red" leftIcon={<FaGoogle size="1rem" />}>
					Login by Google
				</Button>
				{session?.expires_at && (
					<>
						<Textarea
							style={{ wordBreak: "break-all" }}
							value={session.access_token}
							readOnly={true}
							autosize
						/>
						<Text c="dimmed" align="end">
							Expiration Time:{" "}
							{new Date(session.expires_at * 1000).toLocaleString()}
						</Text>
						<Flex justify="flex-end" gap="sm">
							<CopyButton value={session.access_token}>
								{({ copied, copy }) => (
									<Button
										variant="outline"
										color={copied ? "teal" : "blue"}
										onClick={copy}
										leftIcon={copied ? <FaCheck /> : <FaCopy />}
									>
										{copied ? "Copied" : "Copy"}
									</Button>
								)}
							</CopyButton>
							<Popconfirm
								title="Are you sure you want to log out?"
								onOk={logout}
							>
								<Button variant="outline" color="yellow">
									Logout
								</Button>
							</Popconfirm>
						</Flex>
					</>
				)}
			</Flex>
			<GitHubCorner />
		</Container>
	);
}

export default App;
