<template>
  <section class="bg-gray-950">
    <div class="py-8 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <h2 class="mb-5 text-2xl tracking-tight font-medium text-fuchsia-400">
        Frequently asked questions
      </h2>
      <div
        class="grid pt-8 text-left border-t border-slate-600 md:gap-16 md:grid-cols-2"
      >
        <div>
          <div class="mb-10">
            <h3 class="flex items-center mb-4 text-lg font-medium text-white">
              <svg
                class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="#ffffff"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              What randomization algorithm we used?
            </h3>
            <p class="text-gray-500 dark:text-gray-400">
              The randomization algorithm used in this API is the Fisher-Yates
              shuffle algorithm in combination with the Math.random() function.
            </p>
          </div>
          <div class="mb-10">
            <h3 class="flex items-center mb-4 text-lg font-medium text-white">
              <svg
                class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="#ffffff"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              What is database we used?
            </h3>
            <p class="text-gray-500">
              We uses mongodb database to go further and faster when developing
              software applications that handle data of all sorts in a scalable
              way.
            </p>
          </div>

          <div class="mb-10">
            <h3 class="flex items-center mb-4 text-lg font-medium text-white">
              <svg
                class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="#ffffff"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              What is the purpose of apikey?
            </h3>
            <p class="text-gray-500">
              It helps us to identify who is using our api, so we can put the
              user on leaderboard list, and prevent spam.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
