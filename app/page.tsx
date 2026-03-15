import { AetherHero } from "@/components/main/hero";

export default function Home() {
  return (
    <main>
      <AetherHero 
        title="Python dev Have" 
        subtitle="Master Python through interactive, hands-on learning. The ultimate environment for your coding journey."
        ctaLabel="Start Learning"
        ctaHref="#"
        secondaryCtaLabel="View Curriculum"
        secondaryCtaHref="#"
      >
        <div className="flex justify-center mb-6">
          <svg width="80" height="80" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M64.004 0C28.267 0 25.132 15.65 25.132 15.65L24.908 40.57H64.444V49.07H14.168C2.553 49.07 0 66.86 0 66.86C0 85.122 3.86 86.896 14.168 86.896V86.894H25.021V72.29C25.021 57.55 36.963 45.602 51.714 45.602H76.326C84.346 45.602 90.849 39.096 90.849 31.066V13.804C90.849 4.887 81.936 0 64.004 0ZM46.91 14.502C43.52 14.502 40.768 17.252 40.768 20.645C40.768 24.037 43.52 26.786 46.91 26.786C50.301 26.786 53.052 24.037 53.052 20.645C53.052 17.252 50.301 14.502 46.91 14.502Z" fill="url(#paint0_linear_python_blue)"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M63.996 128C99.733 128 102.868 112.35 102.868 112.35L103.092 87.43H63.556V78.93H113.832C125.447 78.93 128 61.14 128 61.14C128 42.878 124.14 41.104 113.832 41.104V41.106H102.979V55.71C102.979 70.45 91.037 82.398 76.286 82.398H51.674C43.654 82.398 37.151 88.904 37.151 96.934V114.196C37.151 123.113 46.064 128 63.996 128ZM81.09 113.498C84.48 113.498 87.232 110.748 87.232 107.355C87.232 103.963 84.48 101.214 81.09 101.214C77.699 101.214 74.948 103.963 74.948 107.355C74.948 110.748 77.699 113.498 81.09 113.498Z" fill="url(#paint1_linear_python_yellow)"/>
            <defs>
              <linearGradient id="paint0_linear_python_blue" x1="16.529" y1="12.029" x2="68.272" y2="70.522" gradientUnits="userSpaceOnUse">
                <stop stopColor="#387EB8"/>
                <stop offset="1" stopColor="#366994"/>
              </linearGradient>
              <linearGradient id="paint1_linear_python_yellow" x1="110.604" y1="116.504" x2="63.528" y2="52.484" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFE052"/>
                <stop offset="1" stopColor="#FFC331"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </AetherHero>
    </main>
  );
}
