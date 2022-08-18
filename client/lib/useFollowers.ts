import { Followers } from "./../pages/api/followers";
import useSWR from "swr";
import type { User } from "pages/api/user";

export default function useFollowers(user: User | undefined) {
  // We do a request to /api/events only if the user is logged in
  const { data: followers } = useSWR<Followers>(
    user?.isAuthenticated ? `/api/followers` : null
  );

  return { followers };
}
