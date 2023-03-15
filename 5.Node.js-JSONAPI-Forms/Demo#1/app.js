// Wrapping all the code inside DOM:
document.addEventListener('DOMContentLoaded', () => {
    // Getting the form reference:
    const form = document.querySelector('form')

    // Adding the submit event listener:
    form.addEventListener('submit', async (event) => {
        // Preventing the default behaviour (page reload) to happen:
        event.preventDefault()
        const username = document.querySelector('input').value
        
        // Fetching the users' data from GitHub
        const response = await fetch(`https://api.github.com/users/${username}`)
        const data = await response.json()
        console.log(data)

        // Creating a card: a little box contains the user's information
        const createCard = (data) => `
            <div class="px-4 py-5 sm:px-6 -ml-4 -mt-4 border-b border-gray-200 pb-8 flex justify-between items-center flex-wrap sm:flex-no-wrap">
                <div class="ml-4 mt-4">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <img class="h-12 w-12 rounded-full" src="${data.avatar_url}" alt="User avatar" />
                        </div>
                        <div class="ml-4">
                            <h3 class="text-lg leading-6 font-medium text-gray-900">
                                ${data.name}
                                <span class="text-sm leading-5 text-gray-500">
                                    @${data.login}
                                </span>
                            </h3>
                            <p class="text-sm leading-5 text-gray-500">
                                ${
                                    data.public_repos
                                } repositories. User since ${data.created_at.slice(0, 4)}
                            </p>
                            <p class="text-sm leading-5 text-gray-500">
                                ${data.location || ""}
                            </p>
                            <p class="mt-1 text-sm leading-5 text-gray-500">
                                ${data.bio}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="ml-4 mt-4 flex-shrink-0 flex">
                    <span class="ml-3 inline-flex rounded-md shadow-sm">
                        <a href="${
                            data.html_url
                        }"><button type="button" class="mr-2 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-50 active:text-gray-800">
                            <span>
                                Profile
                            </span>
                        </button>
                        </a>
                        <a href="${
                            data.blog
                        }"><button type="button" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-50 active:text-gray-800">
                            <span>
                                Website
                            </span>
                        </button>
                        </a>
                    </span>
                </div>
            </div>
        `
        // We used backticks, so we can interpolate data in the string using ${}.
        // The location is not always available, OR conditional is used to avoid showing "null"

        const card = createCard(data)
        document.querySelector("#container").insertAdjacentHTML("beforeend", card)
    })
})
