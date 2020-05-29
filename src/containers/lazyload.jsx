import React, { useEffect, useState, useRef } from 'react';

const Loader = () => <>...loading</>

// class LazyLoadContainer extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             shouldShowContent: false,
//         }
//         this.container = React.createRef()
//     }

//     observer = null;
//     componentDidMount() {
//         this.observer = new IntersectionObserver((entries, self) => {
//             entries.forEach(({isIntersecting}) => {
//                 if(isIntersecting) {
//                     setTimeout(() => {
//                         this.setState({
//                             shouldShowContent: true
//                         });
//                     }, 300);
//                     self.unobserve(this.container.current);
//                 }
//             })
//         }, {treshold: 1})

//         this.observer.observe(this.container.current)
//     }

//     componentWillUnmount() {
//         this.observer && this.observer.unobserve();
//     }

//     render () {
//         const {shouldShowContent, children} = {...this.state, ...this.props};

//         return (
//             <>
//                 <div style={{height: 2000 + 'px'}}></div>
//                 <div ref={this.container}>
//                     {!shouldShowContent && <Loader/>}
//                     {shouldShowContent && children}
//                 </div>
//             </>
//         )
//     }
// }

function LazyLoadContainer({children}) {
    const [shouldShowContent, setShouldShowContent] = useState(false);
    let container = useRef(null);

    useEffect(() => { // runs once our component mounts
        const observer = new IntersectionObserver((entries, self) => {
            entries.forEach(({isIntersecting}) => {
                if(isIntersecting) {
                    setTimeout(() => {
                        setShouldShowContent(true);
                    }, 300);
                    self.unobserve(container.current);
                }
            })
        }, {treshold: 1})

        observer.observe(container.current)
        return () => observer.unobserve();
    }, [container]) // depends on container ref
    
    return (
        <>
            <div style={{height: 2000 + 'px'}}></div>
            <div ref={container}>
                {!shouldShowContent && <Loader/>}
                {shouldShowContent && children}
            </div>
        </>
    )
}

export default LazyLoadContainer;