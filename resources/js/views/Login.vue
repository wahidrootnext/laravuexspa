<template>
    <div class="flex flex-col md:flex-row min-h-screen">
        <div class="w-full md:w-6/12 lg:w-7/12 xl:w-8/12 px-4 py-8 md:px-8 bg-indigo-50">
            <div class="flex h-full justify-center items-center">
                <router-link :to="{ name: 'home' }"><svg width="100" viewBox="0 -.11377 49.742 51.317" xmlns="http://www.w3.org/2000/svg"><path d="m49.626 11.564a.809.809 0 0 1 .028.209v10.972a.8.8 0 0 1 -.402.694l-9.209 5.302v10.509c0 .286-.152.55-.4.694l-19.223 11.066c-.044.025-.092.041-.14.058-.018.006-.035.017-.054.022a.805.805 0 0 1 -.41 0c-.022-.006-.042-.018-.063-.026-.044-.016-.09-.03-.132-.054l-19.219-11.066a.801.801 0 0 1 -.402-.694v-32.916c0-.072.01-.142.028-.21.006-.023.02-.044.028-.067.015-.042.029-.085.051-.124.015-.026.037-.047.055-.071.023-.032.044-.065.071-.093.023-.023.053-.04.079-.06.029-.024.055-.05.088-.069h.001l9.61-5.533a.802.802 0 0 1 .8 0l9.61 5.533h.002c.032.02.059.045.088.068.026.02.055.038.078.06.028.029.048.062.072.094.017.024.04.045.054.071.023.04.036.082.052.124.008.023.022.044.028.068a.809.809 0 0 1 .028.209v20.559l8.008-4.611v-10.51c0-.07.01-.141.028-.208.007-.024.02-.045.028-.068.016-.042.03-.085.052-.124.015-.026.037-.047.054-.071.024-.032.044-.065.072-.093.023-.023.052-.04.078-.06.03-.024.056-.05.088-.069h.001l9.611-5.533a.801.801 0 0 1 .8 0l9.61 5.533c.034.02.06.045.09.068.025.02.054.038.077.06.028.029.048.062.072.094.018.024.04.045.054.071.023.039.036.082.052.124.009.023.022.044.028.068zm-1.574 10.718v-9.124l-3.363 1.936-4.646 2.675v9.124l8.01-4.611zm-9.61 16.505v-9.13l-4.57 2.61-13.05 7.448v9.216zm-36.84-31.068v31.068l17.618 10.143v-9.214l-9.204-5.209-.003-.002-.004-.002c-.031-.018-.057-.044-.086-.066-.025-.02-.054-.036-.076-.058l-.002-.003c-.026-.025-.044-.056-.066-.084-.02-.027-.044-.05-.06-.078l-.001-.003c-.018-.03-.029-.066-.042-.1-.013-.03-.03-.058-.038-.09v-.001c-.01-.038-.012-.078-.016-.117-.004-.03-.012-.06-.012-.09v-21.483l-4.645-2.676-3.363-1.934zm8.81-5.994-8.007 4.609 8.005 4.609 8.006-4.61-8.006-4.608zm4.164 28.764 4.645-2.674v-20.096l-3.363 1.936-4.646 2.675v20.096zm24.667-23.325-8.006 4.609 8.006 4.609 8.005-4.61zm-.801 10.605-4.646-2.675-3.363-1.936v9.124l4.645 2.674 3.364 1.937zm-18.422 20.561 11.743-6.704 5.87-3.35-8-4.606-9.211 5.303-8.395 4.833z" fill="#ff2d20"/></svg></router-link>
            </div>
        </div>
        <div class="w-full md:w-6/12 lg:w-5/12 xl:w-4/12 px-4 py-8 md:px-8 self-center">
            <form class="grid grid-cols-1 gap-3" @submit.prevent="login" novalidate>
                <div class="block text-2xl font-bold text-indigo-700 pb-2">Log in your account</div>
                <label class="block">
                    <span class="text-gray-700 font-medium inline-block mb-1">Email address</span>
                    <input type="email" class="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 field" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required v-model="form.email">
                    <span class="text-red-500 text-sm hidden">Please provide a valid email address</span>
                </label>
                <label class="block">
                    <span class="flex justify-between items-baseline mb-1">
                        <span class="text-gray-700 font-medium">Password</span>
                        <a href="#" class="text-indigo-500 text-sm">Forgot Password?</a>
                    </span>
                    <input type="password" class="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 field" minlength="6" required v-model="form.password">
                    <span class="text-red-500 text-sm hidden">Please provide a valid password</span>
                </label>
                <div class="block pt-2">
                    <button v-if="loading" type="button" class="bg-indigo-400 px-6 py-3 w-full rounded cursor-default"><svg class="animate-spin h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg></button>
                    <button v-else type="submit" class="bg-indigo-500 text-white px-6 py-3 w-full rounded font-bold hover:bg-indigo-600 transition duration-200 each-in-out">Log in</button>
                </div>
                <div class="block text-center">
                    Do not have an account? <router-link :to="{ name: 'registration' }" class="text-indigo-500">Create</router-link>
                </div>
                <div class="block text-center py-5 font-bold">
                    or continue with
                </div>
                <div class="flex justify-center gap-8">
                    <a href="#">
                        <svg width="40" height="40" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                            <path d="m512 256c0 141.39-114.61 256-256 256s-256-114.61-256-256 114.61-256 256-256 256 114.61 256 256z" fill="#4a7aff"/>
                            <path d="m267.23 511.74c136.17-5.8789 244.77-118.12 244.77-255.74 0-0.99609-0.027344-1.9883-0.039062-2.9844l-177.7-177.7-190 198.59 105.57 105.57-48.676 66.184z" fill="#0053bf"/>
                            <path d="m334.26 75.312v57.969s-66.555-9.6602-66.555 33.277v42.938h60.113l-7.5117 65.48h-52.602v170.68h-66.555v-170.68l-56.895-1.0742v-64.406h55.82v-49.379s-3.6836-73.457 68.703-86.949c30.059-5.6055 65.48 2.1445 65.48 2.1445z" fill="#fff"/>
                            <path d="m334.26 133.28v-57.969s-35.422-7.75-65.48-2.1445c-4.6953 0.875-9.0625 2.0078-13.137 3.3477v369.14h12.062v-170.68h52.598l7.5156-65.48h-60.113s0 0 0-42.938 66.555-33.277 66.555-33.277z" fill="#dce1eb"/>
                        </svg>
                    </a>
                    <a href="#">
                        <svg width="40" height="40" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                            <path d="m120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308h-86.308c-34.255 44.488-52.823 98.707-52.823 155.78s18.568 111.3 52.823 155.78h86.308v-86.308c-12.142-20.347-19.131-44.11-19.131-69.477z" fill="#fbbd00"/>
                            <path d="m256 392-60 60 60 60c57.079 0 111.3-18.568 155.78-52.823v-86.216h-86.216c-20.525 12.186-44.388 19.039-69.569 19.039z" fill="#0f9d58"/>
                            <path d="m139.13 325.48-86.308 86.308c6.782 8.808 14.167 17.243 22.158 25.235 48.352 48.351 112.64 74.98 181.02 74.98v-120c-49.624 0-93.117-26.72-116.87-66.523z" fill="#31aa52"/>
                            <path d="m512 256c0-15.575-1.41-31.179-4.192-46.377l-2.251-12.299h-249.56v120h121.45c-11.794 23.461-29.928 42.602-51.884 55.638l86.216 86.216c8.808-6.782 17.243-14.167 25.235-22.158 48.352-48.353 74.981-112.64 74.981-181.02z" fill="#3c79e6"/>
                            <path d="m352.17 159.83 10.606 10.606 84.853-84.852-10.606-10.606c-48.352-48.352-112.64-74.981-181.02-74.981l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z" fill="#cf2d48"/>
                            <path d="m256 120v-120c-68.38 0-132.67 26.629-181.02 74.98-7.991 7.991-15.376 16.426-22.158 25.235l86.308 86.308c23.753-39.803 67.246-66.523 116.87-66.523z" fill="#eb4132"/>
                        </svg>
                    </a>
                    <a href="#">
                        <svg width="40" height="40" enable-background="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
                            <path d="m512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408-19.264-20.512-46.72-33.216-76.672-33.216-58.112 0-104.9 47.168-104.9 104.99 0 8.32 0.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.35-109.79-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-0.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.14-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-0.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.14 44.768-8.608 0-16.864-0.384-25.12-1.44 46.496 29.984 101.6 47.104 161.02 47.104 193.15 0 298.75-160 298.75-298.69 0-4.64-0.16-9.12-0.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z" fill="#03A9F4"/>
                        </svg>
                    </a>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                loading: false,
                form: {
                    email: null,
                    password: null
                }
            }
        },
        methods: {
            login(event) {
                let form = event.target;
                form.classList.add('was-validated');
                if (form.checkValidity()) {
                    this.loading = true;
                    console.log(this.form);
                }
            }
        }
    }
</script>