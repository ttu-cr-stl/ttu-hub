import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/shadcn/avatar";
import { Button } from "@/components/ui/shadcn/button";
import { getOrgById } from "@/db/orgs";
import { getUserByUsername } from "@/db/users";
import Link from "next/link";
import { format, formatDistance } from "date-fns";

interface Officer {
  username: string;
  position: string;
}

function isLightColor(color: string) {
  const hex = color.replace('#', '');
  const c_r = parseInt(hex.substr(0, 2), 16);
  const c_g = parseInt(hex.substr(2, 2), 16);
  const c_b = parseInt(hex.substr(4, 2), 16);
  const brightness = (c_r * 299 + c_g * 587 + c_b * 114) / 1000;
  return brightness > 155;
}

export default async function Org({ params }: { params: { id: string } }) {
  const org = await getOrgById(params.id);

  if (!org) return <div>Organization not found</div>;

  let orgInitials = org.name
    .split(" ")
    .map((word) => word[0])
    .join("");

  const getUserPic = async (username: string) => {
    let user;
    try {
      user = await getUserByUsername(username);
    }
    catch (e) {
      console.error(e);
    }
    return user?.profilePic;
  }

  const officersWithPics = await Promise.all(
    (org.officers as unknown as Officer[]).map(async (member) => ({
      ...member,
      profilePic: await getUserPic(member.username),
    }))
  );

  const isLight = org.color ? isLightColor(org.color) : false;

  return (
    <div className="flex flex-col items-center">
      <Avatar className="w-20 h-20 rounded-none">
        <AvatarImage src={org.orgPicture ?? ""} alt="" />
        <AvatarFallback>{orgInitials}</AvatarFallback>
      </Avatar>

      <span className="mt-1 text-3xl text-gray-800">{org.name}</span>
      <span className="text-md text-gray-500">Established: {format(org.createdAt, "MMM do, yyyy")}</span>

      <div className={`mt-2 grid ${org.officers.length <= 1 ? 'grid-cols-1' : 'grid-cols-2'} gap-4 text-center`}>
        {(
          officersWithPics as unknown as { position: string; username: string; profilePic: string }[]
        ).map((member) => (
          <Link key={member.position} href={`/user/${member.username}`}>
            <div className="text-sm text-gray-700">
              <span className="block">{member.position}</span>
              <div
                className="rounded-full px-2 py-1 mt-1 flex items-center ml-1"
                style={{ backgroundColor: org.color ?? 'gray', color: '#fff' }}
              >
                <Avatar className="w-6 h-6 mr-2">
                  <AvatarImage src={member.profilePic ?? ""} alt={`${member.username}`} />
                  <AvatarFallback>{member?.username?.charAt(0).toUpperCase() ?? ""}</AvatarFallback>
                </Avatar>
                <span className="block font-semibold" style={{ color: isLight ? 'gray' : '#fff' }}>@{member.username}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <span className="ml-6 mr-6 mt-6 text-md text-gray-800 text-justify">
        {org.description}
      </span>
    </div>
  );
}
