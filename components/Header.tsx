import type { NodeParams } from "@/hooks/useNodeRunnerParams";
import Table from "./Table";

export const features = [
  {
    key: "feature_quick_unstake",
    name: "Quick Unstake",
    initials: "QU",
    color: "bg-gray-200 text-gray-800 notdark:text-gray-900",
  },
  {
    key: "feature_insurance",
    name: "Insurance",
    initials: "IN",
    color: "bg-emerald-200 text-emerald-800 notdark:text-emerald-900",
    format(params: NodeParams) {
      return (
        <a
          href={params.insurance_provider_url}
          target="_blank"
          rel="nofollow"
          className="underline"
        >
          Insured by {params.insurance_provider_name}
        </a>
      );
    },
  },
  {
    key: "feature_non_custodial",
    name: "Non-Custodial",
    initials: "NC",
    color: "bg-amber-200 text-amber-800 notdark:text-amber-900",
  },
  {
    key: "feature_dapp_integration",
    name: "Dapp Integration",
    initials: "DI",
    color: "bg-lime-200 text-lime-800 notdark:text-lime-900",
  },
  {
    key: "feature_transfer_stake",
    name: "Transfer Stake",
    initials: "TS",
    color: "bg-sky-200 text-sky-800 notdark:text-sky-900",
  },
  {
    key: "feature_liquid_stake",
    name: "Liquid Stake",
    initials: "LS",
    color: "bg-indigo-200 text-indigo-800 notdark:text-indigo-900",
  },
  {
    key: "feature_dedicated_infra",
    name: "Dedicated Infra",
    initials: "IA",
    color: "bg-purple-200 text-purple-800 notdark:text-purple-900",
  },
  {
    key: "feature_pool",
    name: "Pool",
    initials: "P",
    color: "bg-pink-200 text-pink-800 notdark:text-pink-900",
  },
  {
    key: "auto_compounding",
    name: "Auto Compounding",
    initials: "AC",
    color: "bg-teal-200 text-teal-800 notdark:text-teal-900",
  },
];

export default function Header() {
  return (
    <div className="relative bg-[#ECEBE8] notdark:bg-zinc-900 w-full ">
      <div className="absolute inset-0 w-screen">
        {/* <div className="absolute inset-x-0 top-[-10rem] z-20 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
          <svg
            className="relative left-[calc(50%-11rem)] z-20 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3A9D92" />
                <stop offset={1} stopColor="#FDD64C" />
              </linearGradient>
            </defs>
          </svg>
        </div> */}
        {/* <img
          className="h-full w-screen object-cover object-top opacity-50 notdark:opacity-100"
          src="/bg-art.png"
          alt=""
        />
        <div
          className="absolute inset-0 bg-white notdark:bg-gray-50 mix-blend-multiply"
          aria-hidden="true"
        /> */}
      </div>

      <div className="z-30 relative min-h-[100vh] flex flex-col">
        <div className="bg-zinc-100 notdark:bg-zinc-700 rounded-b-xl shadow-lg">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex justify-between items-center sm:gap-x-12 gap-y-4 py-4">
            <a
              href="/"
              className="flex items-center justify-self-center ml-auto mr-4 sm:m-0"
            >
              <h1 className="text-4xl font-bold tracking-tight text-white flex-shrink">
                <svg
                  width="367"
                  height="43"
                  viewBox="0 0 367 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4/5 max-w-xs h-auto"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.176 17.6813C9.84041 21.0175 9.84041 26.4265 13.176 29.7627L14.0367 30.6236C14.8127 31.3997 16.0709 31.3997 16.8469 30.6236C17.6229 29.8474 17.6229 28.589 16.8469 27.8129L15.9862 26.9521C14.2026 25.1682 14.2026 22.2759 15.9862 20.492L18.252 18.2258L15.4418 15.4152L13.176 17.6813Z"
                    fill="url(#paint0_linear_25_313)"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.6782 13.1784C21.0138 9.84226 26.4219 9.84226 29.7575 13.1784L30.6182 14.0393C31.3942 14.8154 31.3942 16.0738 30.6182 16.8499C29.8422 17.6261 28.584 17.6261 27.808 16.8499L26.9473 15.9891C25.1637 14.2052 22.2719 14.2052 20.4883 15.9891L18.2225 18.2553L15.4124 15.4446L17.6782 13.1784Z"
                    fill="url(#paint1_linear_25_313)"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M63.8302 25.3186C67.1658 21.9825 67.1658 16.5735 63.8302 13.2373L62.9694 12.3764C62.1934 11.6003 60.9353 11.6003 60.1593 12.3764C59.3833 13.1526 59.3833 14.4109 60.1593 15.1871L61.02 16.0479C62.8036 17.8318 62.8036 20.7241 61.02 22.508L58.7542 24.7742L61.5644 27.5848L63.8302 25.3186Z"
                    fill="url(#paint2_linear_25_313)"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M59.328 29.8216C55.9924 33.1577 50.5843 33.1577 47.2487 29.8216L46.388 28.9607C45.612 28.1846 45.612 26.9262 46.388 26.1501C47.164 25.3739 48.4222 25.3739 49.1982 26.1501L50.0589 27.0109C51.8425 28.7948 54.7343 28.7948 56.5179 27.0109L58.7836 24.7447L61.5938 27.5554L59.328 29.8216Z"
                    fill="url(#paint3_linear_25_313)"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M40.8307 16.2098C44.1663 12.8736 49.5744 12.8736 52.91 16.2098L55.2273 18.5275C56.0033 19.3036 56.0033 20.562 55.2273 21.3381C54.4513 22.1143 53.1931 22.1143 52.4171 21.3381L50.0999 19.0205C48.3163 17.2366 45.4245 17.2366 43.6409 19.0205L39.9038 22.7582L37.0936 19.9475L40.8307 16.2098Z"
                    fill="#B4CEE0"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M36.1915 26.4812C32.8559 29.8173 27.4478 29.8173 24.1122 26.4812L21.7802 24.1488C21.0042 23.3726 21.0042 22.1143 21.7802 21.3381C22.5562 20.562 23.8144 20.562 24.5904 21.3381L26.9224 23.6705C28.706 25.4544 31.5977 25.4544 33.3813 23.6705L37.1184 19.9328L39.9286 22.7435L36.1915 26.4812Z"
                    fill="#B4CEE0"
                  />
                  <path
                    d="M83.5099 22.8378C83.5099 21.5085 83.7773 20.3473 84.3121 19.3541C84.8621 18.361 85.6185 17.597 86.5811 17.0622C87.5589 16.5274 88.6743 16.26 89.9272 16.26C91.5316 16.26 92.8685 16.6802 93.9381 17.5206C95.0229 18.361 95.7334 19.5451 96.0696 21.073H91.8983C91.5469 20.0952 90.8669 19.6062 89.8585 19.6062C89.1404 19.6062 88.5674 19.8889 88.1396 20.4542C87.7117 21.0043 87.4978 21.7988 87.4978 22.8378C87.4978 23.8768 87.7117 24.679 88.1396 25.2443C88.5674 25.7944 89.1404 26.0694 89.8585 26.0694C90.8669 26.0694 91.5469 25.5805 91.8983 24.6026H96.0696C95.7334 26.1 95.0229 27.2765 93.9381 28.1321C92.8532 28.9878 91.5163 29.4156 89.9272 29.4156C88.6743 29.4156 87.5589 29.1482 86.5811 28.6134C85.6185 28.0786 84.8621 27.3147 84.3121 26.3215C83.7773 25.3284 83.5099 24.1671 83.5099 22.8378ZM103.987 29.4156C102.734 29.4156 101.604 29.1482 100.595 28.6134C99.6022 28.0786 98.8153 27.3147 98.2347 26.3215C97.6694 25.3284 97.3867 24.1671 97.3867 22.8378C97.3867 21.5238 97.677 20.3702 98.2576 19.377C98.8382 18.3686 99.6328 17.597 100.641 17.0622C101.65 16.5274 102.78 16.26 104.033 16.26C105.286 16.26 106.417 16.5274 107.425 17.0622C108.434 17.597 109.228 18.3686 109.809 19.377C110.389 20.3702 110.68 21.5238 110.68 22.8378C110.68 24.1518 110.382 25.3131 109.786 26.3215C109.205 27.3147 108.403 28.0786 107.379 28.6134C106.371 29.1482 105.24 29.4156 103.987 29.4156ZM103.987 26.0236C104.736 26.0236 105.37 25.7485 105.89 25.1985C106.424 24.6484 106.692 23.8615 106.692 22.8378C106.692 21.8141 106.432 21.0272 105.913 20.4772C105.408 19.9271 104.782 19.6521 104.033 19.6521C103.269 19.6521 102.635 19.9271 102.131 20.4772C101.627 21.0119 101.375 21.7988 101.375 22.8378C101.375 23.8615 101.619 24.6484 102.108 25.1985C102.612 25.7485 103.239 26.0236 103.987 26.0236ZM129.077 16.3059C130.666 16.3059 131.927 16.7872 132.859 17.7498C133.806 18.7124 134.28 20.0493 134.28 21.7606V29.2322H130.384V22.2878C130.384 21.4627 130.162 20.8286 129.719 20.3855C129.291 19.9271 128.695 19.6979 127.931 19.6979C127.167 19.6979 126.564 19.9271 126.121 20.3855C125.693 20.8286 125.479 21.4627 125.479 22.2878V29.2322H121.583V22.2878C121.583 21.4627 121.361 20.8286 120.918 20.3855C120.49 19.9271 119.894 19.6979 119.13 19.6979C118.366 19.6979 117.763 19.9271 117.32 20.3855C116.892 20.8286 116.678 21.4627 116.678 22.2878V29.2322H112.759V16.4434H116.678V18.0477C117.075 17.513 117.595 17.0928 118.237 16.7872C118.878 16.4663 119.604 16.3059 120.414 16.3059C121.377 16.3059 122.232 16.5122 122.981 16.9247C123.745 17.3372 124.341 17.9255 124.769 18.6895C125.212 17.9866 125.815 17.4136 126.579 16.9705C127.343 16.5274 128.176 16.3059 129.077 16.3059ZM140.94 18.254C141.322 17.6581 141.849 17.1768 142.522 16.8101C143.194 16.4434 143.981 16.26 144.882 16.26C145.936 16.26 146.891 16.5274 147.747 17.0622C148.603 17.597 149.275 18.361 149.764 19.3541C150.268 20.3473 150.52 21.5009 150.52 22.8149C150.52 24.1289 150.268 25.2902 149.764 26.2986C149.275 27.2918 148.603 28.0634 147.747 28.6134C146.891 29.1482 145.936 29.4156 144.882 29.4156C143.996 29.4156 143.209 29.2322 142.522 28.8655C141.849 28.4988 141.322 28.0252 140.94 27.4446V35.3287H137.021V16.4434H140.94V18.254ZM146.532 22.8149C146.532 21.837 146.257 21.073 145.707 20.523C145.172 19.9577 144.508 19.675 143.713 19.675C142.934 19.675 142.269 19.9577 141.719 20.523C141.185 21.0883 140.917 21.8599 140.917 22.8378C140.917 23.8157 141.185 24.5873 141.719 25.1526C142.269 25.718 142.934 26.0006 143.713 26.0006C144.493 26.0006 145.157 25.718 145.707 25.1526C146.257 24.572 146.532 23.7928 146.532 22.8149ZM151.797 22.8149C151.797 21.5009 152.042 20.3473 152.531 19.3541C153.035 18.361 153.715 17.597 154.57 17.0622C155.426 16.5274 156.381 16.26 157.435 16.26C158.337 16.26 159.124 16.4434 159.796 16.8101C160.483 17.1768 161.011 17.6581 161.377 18.254V16.4434H165.296V29.2322H161.377V27.4216C160.995 28.0175 160.461 28.4988 159.773 28.8655C159.101 29.2322 158.314 29.4156 157.412 29.4156C156.373 29.4156 155.426 29.1482 154.57 28.6134C153.715 28.0634 153.035 27.2918 152.531 26.2986C152.042 25.2902 151.797 24.1289 151.797 22.8149ZM161.377 22.8378C161.377 21.8599 161.102 21.0883 160.552 20.523C160.017 19.9577 159.36 19.675 158.581 19.675C157.802 19.675 157.137 19.9577 156.587 20.523C156.052 21.073 155.785 21.837 155.785 22.8149C155.785 23.7928 156.052 24.572 156.587 25.1526C157.137 25.718 157.802 26.0006 158.581 26.0006C159.36 26.0006 160.017 25.718 160.552 25.1526C161.102 24.5873 161.377 23.8157 161.377 22.8378ZM172.051 18.5749C172.509 17.872 173.082 17.322 173.77 16.9247C174.457 16.5122 175.221 16.3059 176.062 16.3059V20.4542H174.985C174.007 20.4542 173.273 20.6681 172.784 21.096C172.295 21.5085 172.051 22.2419 172.051 23.2962V29.2322H168.132V16.4434H172.051V18.5749ZM189.991 22.6315C189.991 22.9982 189.968 23.3802 189.922 23.7775H181.052C181.113 24.572 181.365 25.1832 181.808 25.611C182.267 26.0236 182.824 26.2298 183.481 26.2298C184.459 26.2298 185.139 25.8173 185.521 24.9922H189.693C189.479 25.8326 189.089 26.5889 188.524 27.2612C187.974 27.9335 187.278 28.4606 186.438 28.8426C185.598 29.2246 184.658 29.4156 183.619 29.4156C182.366 29.4156 181.251 29.1482 180.273 28.6134C179.295 28.0786 178.531 27.3147 177.981 26.3215C177.431 25.3284 177.156 24.1671 177.156 22.8378C177.156 21.5085 177.423 20.3473 177.958 19.3541C178.508 18.361 179.272 17.597 180.25 17.0622C181.228 16.5274 182.351 16.26 183.619 16.26C184.857 16.26 185.957 16.5198 186.919 17.0393C187.882 17.5588 188.631 18.2998 189.165 19.2624C189.715 20.225 189.991 21.3481 189.991 22.6315ZM185.98 21.6002C185.98 20.9279 185.75 20.3931 185.292 19.9959C184.834 19.5986 184.261 19.4 183.573 19.4C182.916 19.4 182.358 19.5909 181.9 19.9729C181.457 20.3549 181.182 20.8973 181.075 21.6002H185.98Z"
                    fill="#FEC84C"
                  />
                  <path
                    d="M198.325 29.4156C196.889 29.4156 195.713 29.0871 194.796 28.4301C193.894 27.7578 193.39 26.8487 193.283 25.7027H194.933C195.01 26.4056 195.338 26.9785 195.919 27.4216C196.515 27.8495 197.309 28.0634 198.302 28.0634C199.173 28.0634 199.853 27.8571 200.342 27.4446C200.847 27.032 201.099 26.5201 201.099 25.909C201.099 25.4811 200.961 25.1297 200.686 24.8547C200.411 24.5797 200.06 24.3658 199.632 24.213C199.219 24.0449 198.654 23.8692 197.936 23.6858C197.004 23.4414 196.247 23.1969 195.667 22.9524C195.086 22.7079 194.59 22.3489 194.177 21.8752C193.78 21.3863 193.581 20.7369 193.581 19.9271C193.581 19.3159 193.765 18.7506 194.131 18.2311C194.498 17.7116 195.017 17.299 195.69 16.9935C196.362 16.6879 197.126 16.5351 197.982 16.5351C199.326 16.5351 200.411 16.8789 201.236 17.5664C202.061 18.2387 202.504 19.1708 202.565 20.3626H200.961C200.915 19.6291 200.625 19.0409 200.09 18.5978C199.571 18.1394 198.853 17.9102 197.936 17.9102C197.126 17.9102 196.469 18.1012 195.965 18.4832C195.461 18.8652 195.208 19.3388 195.208 19.9042C195.208 20.3931 195.354 20.798 195.644 21.1189C195.949 21.4245 196.324 21.6689 196.767 21.8523C197.21 22.0204 197.806 22.2114 198.555 22.4253C199.456 22.6697 200.174 22.9066 200.709 23.1358C201.244 23.365 201.702 23.7011 202.084 24.1442C202.466 24.5873 202.665 25.1756 202.68 25.909C202.68 26.5813 202.497 27.1848 202.13 27.7196C201.763 28.2391 201.251 28.6516 200.594 28.9572C199.937 29.2628 199.181 29.4156 198.325 29.4156ZM207.786 18.0706V25.8402C207.786 26.6042 207.931 27.1313 208.221 27.4216C208.511 27.7119 209.023 27.8571 209.757 27.8571H211.223V29.2322H209.505C208.374 29.2322 207.534 28.9725 206.983 28.453C206.433 27.9182 206.158 27.0473 206.158 25.8402V18.0706H204.417V16.7184H206.158V13.5785H207.786V16.7184H211.223V18.0706H207.786ZM213.136 22.9524C213.136 21.6689 213.388 20.5459 213.892 19.5833C214.412 18.6054 215.122 17.8567 216.024 17.3372C216.941 16.8025 217.972 16.5351 219.118 16.5351C220.31 16.5351 221.333 16.8101 222.189 17.3602C223.06 17.9102 223.686 18.6131 224.068 19.4687V16.7184H225.673V29.2322H224.068V26.459C223.671 27.3147 223.037 28.0252 222.166 28.5905C221.31 29.1406 220.287 29.4156 219.095 29.4156C217.964 29.4156 216.941 29.1482 216.024 28.6134C215.122 28.0786 214.412 27.3223 213.892 26.3444C213.388 25.3666 213.136 24.2359 213.136 22.9524ZM224.068 22.9753C224.068 21.9669 223.862 21.0807 223.45 20.3167C223.037 19.5527 222.472 18.9645 221.754 18.5519C221.051 18.1394 220.271 17.9331 219.416 17.9331C218.53 17.9331 217.735 18.1318 217.032 18.529C216.329 18.9263 215.772 19.5069 215.359 20.2709C214.962 21.0196 214.763 21.9134 214.763 22.9524C214.763 23.9761 214.962 24.8776 215.359 25.6569C215.772 26.4208 216.329 27.0091 217.032 27.4216C217.735 27.8189 218.53 28.0175 219.416 28.0175C220.271 28.0175 221.051 27.8113 221.754 27.3987C222.472 26.9862 223.037 26.3979 223.45 25.6339C223.862 24.87 224.068 23.9838 224.068 22.9753ZM236.096 29.2322L230.94 23.6171V29.2322H229.335V12.2721H230.94V22.3107L235.982 16.7184H238.228L232.292 22.9524L238.274 29.2322H236.096ZM241.149 14.3578C240.828 14.3578 240.553 14.2432 240.324 14.014C240.095 13.7848 239.98 13.5021 239.98 13.166C239.98 12.8298 240.095 12.5548 240.324 12.3409C240.553 12.1117 240.828 11.9971 241.149 11.9971C241.47 11.9971 241.745 12.1117 241.974 12.3409C242.204 12.5548 242.318 12.8298 242.318 13.166C242.318 13.5021 242.204 13.7848 241.974 14.014C241.745 14.2432 241.47 14.3578 241.149 14.3578ZM241.952 16.7184V29.2322H240.347V16.7184H241.952ZM251.452 16.4892C252.949 16.4892 254.172 16.9553 255.119 17.8873C256.066 18.8041 256.54 20.141 256.54 21.8981V29.2322H254.958V22.0815C254.958 20.7216 254.615 19.6826 253.927 18.9645C253.255 18.2464 252.33 17.8873 251.154 17.8873C249.947 17.8873 248.984 18.2693 248.266 19.0332C247.548 19.7972 247.189 20.9203 247.189 22.4024V29.2322H245.585V16.7184H247.189V18.8499C247.586 18.0859 248.159 17.5053 248.908 17.108C249.657 16.6955 250.505 16.4892 251.452 16.4892ZM265.337 16.5351C266.513 16.5351 267.537 16.8101 268.408 17.3602C269.279 17.9102 269.905 18.6054 270.287 19.4458V16.7184H271.891V29.5531C271.891 30.6991 271.639 31.7151 271.135 32.6013C270.646 33.4875 269.959 34.1675 269.072 34.6411C268.186 35.1301 267.178 35.3746 266.047 35.3746C264.443 35.3746 263.106 34.9926 262.036 34.2286C260.982 33.4646 260.325 32.4256 260.065 31.1116H261.647C261.922 31.9825 262.441 32.6777 263.205 33.1972C263.984 33.7167 264.932 33.9765 266.047 33.9765C266.857 33.9765 267.583 33.8008 268.224 33.4493C268.866 33.1132 269.37 32.609 269.737 31.9367C270.104 31.2644 270.287 30.4699 270.287 29.5531V26.459C269.89 27.3147 269.256 28.0252 268.385 28.5905C267.529 29.1406 266.513 29.4156 265.337 29.4156C264.191 29.4156 263.159 29.1482 262.242 28.6134C261.341 28.0786 260.63 27.3223 260.111 26.3444C259.607 25.3666 259.355 24.2359 259.355 22.9524C259.355 21.6689 259.607 20.5459 260.111 19.5833C260.63 18.6054 261.341 17.8567 262.242 17.3372C263.159 16.8025 264.191 16.5351 265.337 16.5351ZM270.287 22.9753C270.287 21.9669 270.081 21.0807 269.668 20.3167C269.256 19.5527 268.69 18.9645 267.972 18.5519C267.269 18.1394 266.49 17.9331 265.634 17.9331C264.748 17.9331 263.954 18.1318 263.251 18.529C262.548 18.9263 261.99 19.5069 261.578 20.2709C261.181 21.0196 260.982 21.9134 260.982 22.9524C260.982 23.9761 261.181 24.8776 261.578 25.6569C261.99 26.4208 262.548 27.0091 263.251 27.4216C263.954 27.8189 264.748 28.0175 265.634 28.0175C266.49 28.0175 267.269 27.8113 267.972 27.3987C268.69 26.9862 269.256 26.3979 269.668 25.6339C270.081 24.87 270.287 23.9838 270.287 22.9753Z"
                    fill="#A0BACC"
                  />
                  <path
                    d="M280.135 29.4156C278.699 29.4156 277.522 29.0871 276.606 28.4301C275.704 27.7578 275.2 26.8487 275.093 25.7027H276.743C276.82 26.4056 277.148 26.9785 277.729 27.4216C278.325 27.8495 279.119 28.0634 280.112 28.0634C280.983 28.0634 281.663 27.8571 282.152 27.4446C282.656 27.032 282.908 26.5201 282.908 25.909C282.908 25.4811 282.771 25.1297 282.496 24.8547C282.221 24.5797 281.869 24.3658 281.442 24.213C281.029 24.0449 280.464 23.8692 279.746 23.6858C278.814 23.4414 278.057 23.1969 277.477 22.9524C276.896 22.7079 276.399 22.3489 275.987 21.8752C275.59 21.3863 275.391 20.7369 275.391 19.9271C275.391 19.3159 275.574 18.7506 275.941 18.2311C276.308 17.7116 276.827 17.299 277.5 16.9935C278.172 16.6879 278.936 16.5351 279.791 16.5351C281.136 16.5351 282.221 16.8789 283.046 17.5664C283.871 18.2387 284.314 19.1708 284.375 20.3626H282.771C282.725 19.6291 282.435 19.0409 281.9 18.5978C281.381 18.1394 280.662 17.9102 279.746 17.9102C278.936 17.9102 278.279 18.1012 277.775 18.4832C277.27 18.8652 277.018 19.3388 277.018 19.9042C277.018 20.3931 277.163 20.798 277.454 21.1189C277.759 21.4245 278.134 21.6689 278.577 21.8523C279.02 22.0204 279.616 22.2114 280.364 22.4253C281.266 22.6697 281.984 22.9066 282.519 23.1358C283.054 23.365 283.512 23.7011 283.894 24.1442C284.276 24.5873 284.475 25.1756 284.49 25.909C284.49 26.5813 284.307 27.1848 283.94 27.7196C283.573 28.2391 283.061 28.6516 282.404 28.9572C281.747 29.2628 280.991 29.4156 280.135 29.4156ZM298.832 22.3336C298.832 22.8837 298.817 23.3038 298.786 23.5941H288.404C288.449 24.5415 288.679 25.3513 289.091 26.0236C289.504 26.6959 290.046 27.2077 290.718 27.5591C291.391 27.8953 292.124 28.0634 292.919 28.0634C293.958 28.0634 294.829 27.8113 295.531 27.307C296.25 26.8028 296.723 26.1229 296.952 25.2672H298.648C298.343 26.4896 297.686 27.4904 296.677 28.2696C295.684 29.0336 294.431 29.4156 292.919 29.4156C291.742 29.4156 290.688 29.1558 289.756 28.6363C288.824 28.1016 288.09 27.3529 287.556 26.3903C287.036 25.4124 286.776 24.2741 286.776 22.9753C286.776 21.6766 287.036 20.5383 287.556 19.5604C288.075 18.5825 288.801 17.8338 289.733 17.3143C290.665 16.7948 291.727 16.5351 292.919 16.5351C294.11 16.5351 295.149 16.7948 296.036 17.3143C296.937 17.8338 297.625 18.5367 298.098 19.4229C298.587 20.2938 298.832 21.264 298.832 22.3336ZM297.205 22.2878C297.22 21.3557 297.029 20.5612 296.632 19.9042C296.25 19.2472 295.722 18.7506 295.05 18.4144C294.378 18.0783 293.644 17.9102 292.85 17.9102C291.658 17.9102 290.642 18.2922 289.802 19.0562C288.961 19.8201 288.495 20.8973 288.404 22.2878H297.205ZM303.371 18.9416C303.723 18.1623 304.258 17.5588 304.976 17.131C305.709 16.7031 306.603 16.4892 307.657 16.4892V18.1623H307.222C306.061 18.1623 305.129 18.4756 304.426 19.102C303.723 19.7285 303.371 20.7751 303.371 22.2419V29.2322H301.767V16.7184H303.371V18.9416ZM314.517 27.6737L318.734 16.7184H320.43L315.411 29.2322H313.6L308.581 16.7184H310.3L314.517 27.6737ZM323.407 14.3578C323.086 14.3578 322.811 14.2432 322.582 14.014C322.353 13.7848 322.238 13.5021 322.238 13.166C322.238 12.8298 322.353 12.5548 322.582 12.3409C322.811 12.1117 323.086 11.9971 323.407 11.9971C323.728 11.9971 324.003 12.1117 324.232 12.3409C324.461 12.5548 324.576 12.8298 324.576 13.166C324.576 13.5021 324.461 13.7848 324.232 14.014C324.003 14.2432 323.728 14.3578 323.407 14.3578ZM324.209 16.7184V29.2322H322.605V16.7184H324.209ZM327.109 22.9753C327.109 21.6766 327.368 20.5459 327.888 19.5833C328.407 18.6054 329.125 17.8567 330.042 17.3372C330.959 16.8025 332.006 16.5351 333.182 16.5351C334.725 16.5351 335.994 16.9171 336.987 17.681C337.995 18.445 338.645 19.484 338.935 20.798H337.216C337.002 19.8965 336.536 19.1937 335.818 18.6895C335.115 18.17 334.236 17.9102 333.182 17.9102C332.342 17.9102 331.585 18.1012 330.913 18.4832C330.241 18.8652 329.706 19.4382 329.309 20.2021C328.927 20.9508 328.736 21.8752 328.736 22.9753C328.736 24.0754 328.927 25.0075 329.309 25.7715C329.706 26.5354 330.241 27.1084 330.913 27.4904C331.585 27.8724 332.342 28.0634 333.182 28.0634C334.236 28.0634 335.115 27.8113 335.818 27.307C336.536 26.7875 337.002 26.0694 337.216 25.1526H338.935C338.645 26.4361 337.995 27.4675 336.987 28.2467C335.978 29.026 334.71 29.4156 333.182 29.4156C332.006 29.4156 330.959 29.1558 330.042 28.6363C329.125 28.1016 328.407 27.3529 327.888 26.3903C327.368 25.4124 327.109 24.2741 327.109 22.9753ZM353.22 22.3336C353.22 22.8837 353.205 23.3038 353.174 23.5941H342.792C342.838 24.5415 343.067 25.3513 343.479 26.0236C343.892 26.6959 344.434 27.2077 345.107 27.5591C345.779 27.8953 346.512 28.0634 347.307 28.0634C348.346 28.0634 349.217 27.8113 349.92 27.307C350.638 26.8028 351.111 26.1229 351.341 25.2672H353.037C352.731 26.4896 352.074 27.4904 351.065 28.2696C350.072 29.0336 348.819 29.4156 347.307 29.4156C346.13 29.4156 345.076 29.1558 344.144 28.6363C343.212 28.1016 342.478 27.3529 341.944 26.3903C341.424 25.4124 341.164 24.2741 341.164 22.9753C341.164 21.6766 341.424 20.5383 341.944 19.5604C342.463 18.5825 343.189 17.8338 344.121 17.3143C345.053 16.7948 346.115 16.5351 347.307 16.5351C348.499 16.5351 349.538 16.7948 350.424 17.3143C351.325 17.8338 352.013 18.5367 352.486 19.4229C352.975 20.2938 353.22 21.264 353.22 22.3336ZM351.593 22.2878C351.608 21.3557 351.417 20.5612 351.02 19.9042C350.638 19.2472 350.111 18.7506 349.438 18.4144C348.766 18.0783 348.033 17.9102 347.238 17.9102C346.046 17.9102 345.03 18.2922 344.19 19.0562C343.349 19.8201 342.883 20.8973 342.792 22.2878H351.593ZM360.464 29.4156C359.028 29.4156 357.851 29.0871 356.934 28.4301C356.033 27.7578 355.529 26.8487 355.422 25.7027H357.072C357.148 26.4056 357.477 26.9785 358.057 27.4216C358.653 27.8495 359.448 28.0634 360.441 28.0634C361.312 28.0634 361.992 27.8571 362.481 27.4446C362.985 27.032 363.237 26.5201 363.237 25.909C363.237 25.4811 363.1 25.1297 362.825 24.8547C362.55 24.5797 362.198 24.3658 361.77 24.213C361.358 24.0449 360.792 23.8692 360.074 23.6858C359.142 23.4414 358.386 23.1969 357.805 22.9524C357.225 22.7079 356.728 22.3489 356.316 21.8752C355.918 21.3863 355.72 20.7369 355.72 19.9271C355.72 19.3159 355.903 18.7506 356.27 18.2311C356.636 17.7116 357.156 17.299 357.828 16.9935C358.501 16.6879 359.264 16.5351 360.12 16.5351C361.465 16.5351 362.55 16.8789 363.375 17.5664C364.2 18.2387 364.643 19.1708 364.704 20.3626H363.1C363.054 19.6291 362.763 19.0409 362.229 18.5978C361.709 18.1394 360.991 17.9102 360.074 17.9102C359.264 17.9102 358.607 18.1012 358.103 18.4832C357.599 18.8652 357.347 19.3388 357.347 19.9042C357.347 20.3931 357.492 20.798 357.782 21.1189C358.088 21.4245 358.462 21.6689 358.905 21.8523C359.349 22.0204 359.944 22.2114 360.693 22.4253C361.595 22.6697 362.313 22.9066 362.847 23.1358C363.382 23.365 363.841 23.7011 364.223 24.1442C364.605 24.5873 364.803 25.1756 364.819 25.909C364.819 26.5813 364.635 27.1848 364.268 27.7196C363.902 28.2391 363.39 28.6516 362.733 28.9572C362.076 29.2628 361.32 29.4156 360.464 29.4156Z"
                    fill="#3B9B89"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_25_313"
                      x1="21.3488"
                      y1="10.6763"
                      x2="21.3488"
                      y2="32.0289"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FDD64B" />
                      <stop offset="1" stopColor="#FDC04B" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_25_313"
                      x1="21.3488"
                      y1="10.6763"
                      x2="21.3488"
                      y2="32.0289"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FDD64B" />
                      <stop offset="1" stopColor="#FDC04B" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_25_313"
                      x1="55.6574"
                      y1="10.9711"
                      x2="55.6574"
                      y2="32.3237"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#3E936F" />
                      <stop offset="1" stopColor="#389E98" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_25_313"
                      x1="55.6574"
                      y1="10.9711"
                      x2="55.6574"
                      y2="32.3237"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#3E936F" />
                      <stop offset="1" stopColor="#389E98" />
                    </linearGradient>
                  </defs>
                </svg>
              </h1>
            </a>

            <div className="flex gap-x-2 mr-2 sm:mr-4">
              <span className="sm:inline-block hidden">Chat with us </span>
              <a
                href={process.env.NEXT_PUBLIC_TELEGRAM_URL!}
                className="tl_main_logo"
                target={"_blank"}
              >
                <span className="sr-only">
                  Telegram SendWallet by SendNodes
                </span>
                <div
                  className="tl_main_logo play"
                  style={{ backgroundImage: 'url("/t_logo_sprite.svg")' }}
                />
              </a>
            </div>
          </div>
        </div>

        <div className="flex-1 flex-grow items-center justify-between w-full py-6 max-w-[1920px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between md:divide-x-2 divide-solid md:divide-neutral-400 max-w-7xl mx-auto py-4 md:py-6 px-4 sm:px-6 lg:px-8">
            <div className="md:w-1/2 mx-auto  flex-shrink px-4">
              <h2 className="text-lg sm:text-xl my-2 font-bold">
                <img
                  src="/pokt-icon.png"
                  alt="Pocket Network"
                  className="w-auto h-8 inline-block align-middle"
                />{" "}
                Pocket Network Staking Services
              </h2>
              <p className=" md:text-xl pb-4">
                A comparison of Pocket Network staking services. This list
                breaks down the services by their staking rewards, staking fees,
                and staking minimums.
              </p>
            </div>
            <div className="md:w-1/2 mx-auto flex-shrink px-4">
              <h3 className="mx-auto text-lg sm:text-xl my-2 font-bold">
                Key Features
              </h3>
              <ul className="flex flex-wrap gap-x-2 md:gap-x-3 gap-y-2 md:gap-y-3 items-center">
                {features
                  .filter(
                    (f) =>
                      ![
                        "feature_dedicated_infra",
                        "feature_insurance",
                      ].includes(f.key)
                  )
                  .map(({ key, name, color }) => (
                    <span
                      key={key}
                      className={`inline-flex items-center rounded px-2 py-0.5 text-xs md:text-md md:rounded-md md:px-4 md:py-2 font-medium ${color}`}
                    >
                      {name}
                    </span>
                  ))}
              </ul>
            </div>
          </div>

          <Table />
        </div>
      </div>
    </div>
  );
}
