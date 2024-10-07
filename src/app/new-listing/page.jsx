import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getUser } from "@workos-inc/authkit-nextjs"
import { AutoPaginatable, WorkOS,OrganizationMemberships } from "@workos-inc/node";

export default async function NewListingPage(){
    const {user} =  await getUser();
    const workos = new WorkOS(process.env.WORKOS_API_KEY);

    if (!user) {
        return (
          <div className="container">
            <div>You need to be logged in to post a job</div>
          </div>
        );
      }
    
        const OrganizationMemberships = await workos.userManagement.listOrganizationMemberships({
            userId: user.id,
        })
    
    
    return(
        <div className="container">
                <div>
                    <pre>
                    {JSON.stringify(OrganizationMemberships)}
                    </pre>
                    <h2 className="text-lg mt-6">
                        Your Companies
                    </h2>
                    <p className="text-gray-500  text-sm mb-2">
                        Select a company to create a job add for
                    </p>
                    <div className="border border-red-200 bg-red-50 p-4 rounded-md">
                        No companies found assigned to your user
                    </div>

                    <h2 className="text-lg mt-6">
                        Create A New Company
                    </h2>
                    <p className="text-gray-500  text-sm mb-2">
                        To create a job listing you first need to create a job listing
                    </p>
                    <form action="" className="flex gap-2">    
                        <input
                            className="p-2 border border-gray-400 rounded-md" 
                            type="text"
                            placeholder="Company Name"
                        />
                        <button className="flex gap-2 items-center bg-gray-200 px-4 py-2 rounded-md">
                            Create company
                            {/* <FontAwesomeIcon className="h-4" icon={faArrowRight}/> */}
                        </button>
                    </form>
                    
                </div>
        </div>
    )
}