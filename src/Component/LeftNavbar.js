import React from 'react';


const RecentSearch = (props) => {
    return (
        <div >
            <div className="recent-search">
                <div>
                    <i className="fas fa-magnifying-glass"></i>
                    <span className='text-light'>{props.title}</span>
                </div>
                <div className="text-iris">
                    <i className={`${props.icon2}`}></i>
                </div>
            </div>
        </div>
    )
}

const Follow = (props) => {
    return (
        <div className="follow">
            <div>
                <span>{props.title}</span>
                <p className='subtopic text-light'>{props.subtitle}</p>
            </div>
            <div>
                <button className="follow-btn text-iris">Follow</button>
                <i className="fa-solid fa-xmark"></i>
            </div>

        </div>
    )

}

const LeftNavbar = () => {
    return (
        <div>
            <div className='recent-search-card'>
                <h2 className='title'>Recent Searches</h2>
                <RecentSearch title="UX Design " icon2="fa fa-arrow-trend-up" />
                <RecentSearch title="Marketing " icon2="fa fa-arrow-trend-up" />
                <RecentSearch  title="Expansion" />
                <button className='text-iris show-more'>Show More</button>
            </div>

            <div className='recent-search-card'>
                <h2 className='title'>Topic to Follow</h2>
                <Follow title="UX Design " subtitle="Design"/>
                <Follow title="Expansion " subtitle="Topic"/>
                <Follow title="Technology" subtitle="Topic"/>
                <button className='text-iris show-more'>Show More</button>
            </div>
        </div>
    )
}
export default LeftNavbar;