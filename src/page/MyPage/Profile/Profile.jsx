//프로필
function Profile() {
  return (
    <div className="min-h-[80vh] space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
      <form action="#" method="POST">
        <div className="shadow sm:rounded-md sm:overflow-hidden dark:border dark:border-gray-700">
          <div className="py-6 px-4 space-y-6 sm:p-6">
            <div>
              <h3 className="text-lg leading-6 font-medium">프로필</h3>
              <p className="mt-1 text-sm text-gray-500">
                This information will be displayed publicly so be careful what
                you share.
              </p>
            </div>
            <div className="col-span-3">
              <label className="block text-sm font-medium">프로필 사진</label>
              <div className="mt-1 flex items-center">
                <span className="inline-block bg-gray-100 rounded-full overflow-hidden h-20 w-20">
                  <svg
                    className="h-full w-full text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span>
                <button
                  type="button"
                  className="ml-5 border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm leading-4 font-medium hover:bg-gray-50 hover:shadow-md focus:outline-none dark:hover:bg-gray-900"
                >
                  변경하기
                </button>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-3 sm:col-span-1">
                <label
                  htmlFor="company-website"
                  className="block text-sm font-medium"
                >
                  닉네임
                </label>
                <div className="mt-1 rounded-md shadow-sm flex">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="focus:ring-main focus:border-main flex-grow block w-full min-w-0 rounded-md sm:text-sm border-gray-300 dark:bg-black"
                  />
                </div>
              </div>

              <div className="col-span-3">
                <label htmlFor="about" className="block text-sm font-medium">
                  나의 한마디
                </label>
                <div className="mt-1">
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="shadow-sm focus:ring-main focus:border-main mt-1 block w-full sm:text-sm border border-gray-300 rounded-md dark:bg-black"
                    placeholder="나를 소개하는 한마디를 적어보세요."
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 dark:bg-gray-900">
            <button
              type="submit"
              className="bg-main border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-point focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main"
            >
              변경 적용하기
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
export default Profile
