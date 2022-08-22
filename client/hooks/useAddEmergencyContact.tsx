import React, { useState } from "react";
import useSWR from "swr";
import { User } from "pages/api/user";
import { UserV2 } from "twitter-api-v2";
import { useToast } from "@chakra-ui/react";
import { Contacts } from "pages/api/contacts";
import { useAuthContext } from "context/auth";

interface Props {
  onClose?: () => void;
}

export const useAddEmergencyContact = ({ onClose }: Props) => {
  const [isAddingContact, setIsAddingContact] = useState(false);
  const [selectedContacts, setSelectedContacts] = useState<string[]>([]);

  const user = useAuthContext();

  const { data: followers, error: errorFetchingFollowers } = useSWR<UserV2[]>(
    user?.isAuthenticated ? "/api/followers" : null
  );

  const { data: contacts, mutate: mutateContact } = useSWR<Contacts[]>(
    user?.isAuthenticated ? "/api/contacts" : null
  );

  const toast = useToast();

  const isFollowersLoading = !errorFetchingFollowers && !followers;

  const myContacts = contacts?.map((contact) => contact.username);

  const unsavedFollowers = followers?.filter(
    (follower) => !myContacts?.includes(follower.username)
  );

  const handleAddContacts = async () => {
    try {
      if (selectedContacts.length < 1) {
        return toast({
          title: "Please add at least 1 emergency contact(s)",
          status: "warning",
          position: "top",
        });
      }

      setIsAddingContact(true);

      const payload = { twitter_user_ids: selectedContacts };

      const response = await fetch("/api/contacts", {
        method: "POST",
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setIsAddingContact(false);

        const { data } = await response.json();

        mutateContact([...contacts!, ...data]);

        toast({
          title: "Successful",
          description: `${selectedContacts.length} Emergency Contact(s) added successfully.`,
          status: "success",
          variant: "solid",
          position: "top",
        });

        onClose ? onClose() : null;
      } else {
        console.log(response);

        toast({
          position: "top",
          status: "error",
          variant: "solid",
          title: "Error",
          description: response.statusText,
        });

        setIsAddingContact(false);
      }
    } catch (error) {
      setIsAddingContact(false);

      console.log(error);
    }
  };

  return {
    isAddingContact,
    mutateContact,
    handleAddContacts,
    selectedContacts,
    setSelectedContacts,
    followers: unsavedFollowers,
    isFollowersLoading,
    errorFetchingFollowers,
  };
};
