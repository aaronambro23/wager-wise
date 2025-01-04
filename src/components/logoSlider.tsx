import Slider from 'react-infinite-logo-slider'

const LogoSlider = () => {
    return (
        <div className="bg-black py-20">
            <h1 className="text-center text-[56px] font-bold text-gray-300 max-w-4xl mx-auto leading-tight mb-16">
                Integrated with your favorite sportsbooks to place bets faster than ever
            </h1>

            <div className="slider-wrapper">
                <Slider
                    width="300px"
                    duration={20}
                    pauseOnHover={true}
                    blurBorders={false}
                    blurBorderColor={'#fff'}
                >
                    <Slider.Slide>
                        <div className="bg-[#1C1C1C] p-16 rounded-2xl w-[350px] mr-5">
                            <img src="/images/draftkings.svg" alt="DraftKings" className="h-20" />
                        </div>
                    </Slider.Slide>
                    <Slider.Slide>
                        <div className="bg-[#1C1C1C] p-16 rounded-2xl w-[350px] mr-5">
                            <img src="/images/fanduel.svg" alt="FanDuel" className="h-20" />
                        </div>
                    </Slider.Slide>
                    <Slider.Slide>
                        <div className="bg-[#1C1C1C] p-16 rounded-2xl w-[350px] mr-5">
                            <img src="/images/pointsbet.svg" alt="PointsBet" className="h-20" />
                        </div>
                    </Slider.Slide>
                    <Slider.Slide>
                        <div className="bg-[#1C1C1C] p-16 rounded-2xl w-[350px] mr-5">
                            <img src="/images/caesars.svg" alt="Caesars" className="h-20" />
                        </div>
                    </Slider.Slide>
                    <Slider.Slide>
                        <div className="bg-[#1C1C1C] p-16 rounded-2xl w-[350px] mr-5">
                            <img src="/images/betrivers.svg" alt="BetRivers" className="h-20" />
                        </div>
                    </Slider.Slide>
                </Slider>
            </div>
        </div>
    )
}

export default LogoSlider