import "./css/perfil.css";
import "../css/global.css";

export function Perfil(){
    return(
        <>
            <div className="perfil">
            <div className="display">
            <div className="notifications">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 22 25" fill="none">
                <path d="M17.6667 8.73709C17.6667 6.8511 16.9643 5.04237 15.714 3.70878C14.4638 2.37518 12.7681 1.62598 11 1.62598C9.23189 1.62598 7.5362 2.37518 6.28596 3.70878C5.03571 5.04237 4.33333 6.8511 4.33333 8.73709C4.33333 17.0334 1 19.4038 1 19.4038H21C21 19.4038 17.6667 17.0334 17.6667 8.73709Z" stroke="url(#paint0_linear_1099_57)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.9226 22.604C12.7272 22.9408 12.4469 23.2203 12.1095 23.4146C11.7721 23.6089 11.3897 23.7112 11.0003 23.7112C10.611 23.7112 10.2286 23.6089 9.89124 23.4146C9.5539 23.2203 9.27346 22.9408 9.07812 22.604" stroke="url(#paint1_linear_1099_57)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <defs>
                        <linearGradient id="paint0_linear_1099_57" x1="11" y1="1.62598" x2="11" y2="19.4038" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#B5B4B4"/>
                        <stop offset="0.244792" stop-color="#50FAAB"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_1099_57" x1="11.0003" y1="22.604" x2="11.0003" y2="23.7112" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#B5B4B4"/>
                        <stop offset="0.244792" stop-color="#50FAAB"/>
                        </linearGradient>
                    </defs>
            </svg>
            </div>
            
            <div className="person">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 45 46" fill="none">
                    <path d="M22.5 0.168701C10.0706 0.168701 0 10.2393 0 22.6687C0 35.0981 10.0706 45.1687 22.5 45.1687C34.9294 45.1687 45 35.0981 45 22.6687C45 10.2393 34.9294 0.168701 22.5 0.168701ZM22.5 8.87838C26.9093 8.87838 30.4839 12.453 30.4839 16.8622C30.4839 21.2715 26.9093 24.8461 22.5 24.8461C18.0907 24.8461 14.5161 21.2715 14.5161 16.8622C14.5161 12.453 18.0907 8.87838 22.5 8.87838ZM22.5 40.0881C17.1744 40.0881 12.4022 37.6748 9.20867 33.9006C10.9143 30.6889 14.253 28.4752 18.1452 28.4752C18.3629 28.4752 18.5806 28.5114 18.7893 28.575C19.9688 28.956 21.2026 29.201 22.5 29.201C23.7974 29.201 25.0403 28.956 26.2107 28.575C26.4194 28.5114 26.6371 28.4752 26.8548 28.4752C30.747 28.4752 34.0857 30.6889 35.7913 33.9006C32.5978 37.6748 27.8256 40.0881 22.5 40.0881Z" fill="url(#paint0_linear_1099_60)"/>
                        <defs>
                            <linearGradient id="paint0_linear_1099_60" x1="5.81036" y1="5.87212" x2="34.7077" y2="45.0356" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#B5B4B4"/>
                            <stop offset="1" stop-color="#50FAAB"/>
                            </linearGradient>
                        </defs>
                </svg>
            </div>
            
            <p>Olá, Yago!</p>
            </div>
        </div>
        </>
    )
}