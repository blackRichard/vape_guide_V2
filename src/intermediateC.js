import React from 'react';

const interContent = () => {
    return (
        <div>
            <main>
                <h1 className="visually-hidden">Heroes examples</h1>

                <div className="px-4 py-5 my-5 text-center">
                    <img src="/images/vapehaven_logo.png" alt="" width="150" height="150" />
                    <h1 className="display-5 fw-bold">INTERMEDIATE GUIDE TO VAPING</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4">Welcome to the Intermediate Guide to Vaping! By this point, you've already familiarized yourself with the basics of vaping and have gained some experience. Now, it's time to take your vaping journey to the next level. In this comprehensive guide, we will delve into various tips, techniques, and detailed information to help you enhance your vaping experience and make the most out of your device. So, let's dive in!</p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        </div>
                    </div>
                </div>

                <div className="b-example-divider"></div>

                <div className="px-4 pt-5 my-5 text-center border-bottom">
                    <h1 className="display-4 fw-bold">Advanced Vaping Devices</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4">There are a lot of different devices you can use, whether it's cigalikes, pens, small pods, or mods which consist of box mods, mechanical mods, or rebuildable atomizers.</p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                            <button type="button" className="btn btn-outline-secondary btn-lg px-4" onClick={() => window.location.href = 'https:www.cancerresearchuk.org/about-cancer/causes-of-cancer/smoking-and-cancer/is-vaping-harmful'}>Read more about studies</button>
                        </div>
                    </div>
                    <div className="overflow-hidden" style={{ maxHeight: '30vh' }}>
                        <div className="container px-5">
                            <img src="/images/v2-infographics-individuals-all-types.jpg" width="630" height="200" loading="lazy" id="vaping_devices" />
                        </div>
                    </div>
                </div>

                <div className="b-example-divider"></div>

                <div className="container col-xxl-8 px-4 py-5">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                        <div className="col-10 col-sm-8 col-lg-6">
                            <img src="/images/mod.jpg" width="700" height="430" loading="lazy" alt="Vape Mods" />
                        </div>
                        <div className="col-lg-6">
                            <h1 className="display-5 fw-bold lh-1 mb-3">Vape Mods</h1>
                            <p className="lead">Vape mods are the largest and most powerful types of vape devices. They’re usually shaped like small boxes, and they’re designed to hold one or more high-capacity battery cells. Vape mods can often deliver more than 200 watts of power – and when a vape mod comes in a package including a tank, it’ll almost always be a tank designed for direct-to-lung inhaling. Vape mods often have advanced features that other vaping devices lack, such as custom power curves and automatic temperature limiting. They are almost always the devices that experienced vapers use.</p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2" onClick={() => window.location.href = 'https:vapoholic.co.uk/2022/03/11/what-is-a-vape-mod-everything-you-need-to-know-about-mods/'} target="_blank" rel="noopener noreferrer">Read more</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container my-5">
                    <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                            <h1 className="display-4 fw-bold lh-1">Vape Pods</h1>
                            <p className="lead">Pod mods, also known as pod systems or pod kit vapes, have gained popularity in recent years due to their convenience, ease of use, and portability. These devices are designed to provide a user-friendly vaping experience, making them ideal for beginners and vapers on the go.</p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold" onClick={() => window.location.href = 'https:relxnow.com/blogs/vape-knowledge/what-is-a-vape-pod'} target="_blank" rel="noopener noreferrer">Read more</button>
                            </div>
                        </div>
                        <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                            <img className="rounded-lg-3" src="/images/pod_vape.jpg" width="520" height="320" loading="lazy" alt="Vape Pods" />
                        </div>
                    </div>
                </div>
                <div className="container col-xxl-8 px-4 py-5">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                        <div className="col-10 col-sm-8 col-lg-6">
                            <img src="/images/vape_pen.jpg" width="600" height="430" loading="lazy" alt="Vape Pens" />
                        </div>
                        <div className="col-lg-6">
                            <h1 className="display-5 fw-bold lh-1 mb-3">Vape Pens</h1>
                            <p className="lead">Vape pens are a popular type of electronic cigarette device known for their compact size, simplicity, and ease of use. They are an excellent choice for beginners and vapers who prefer a portable and discreet vaping experience.</p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2" onClick={() => window.location.href = 'https:www.blu.com/en-GB/blog/vape-devices-and-e-cigs/what-is-a-vape-pen'} target="_blank" rel="noopener noreferrer">Read more</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container my-5">
                    <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                            <h1 className="display-4 fw-bold lh-1">Do you want to mix your own e-liquids?</h1>
                            <p className="lead">
                                <ol>
                                    <li>Gather your ingredients: PG, VG, flavor concentrates, and nicotine (if desired).</li>
                                    <li>Determine the desired ratios: Decide on the ratio of PG to VG for your e-liquid.</li>
                                    <li>Measure the ingredients: Use syringes or pipettes to measure the appropriate amounts of PG, VG, flavor concentrates, and nicotine.</li>
                                    <li>Mix thoroughly: Combine the ingredients in a clean bottle and shake well to ensure they are thoroughly mixed.</li>
                                    <li>Steep the e-liquid: Let the e-liquid steep for a period of time to allow the flavors to blend together (optional).</li>
                                    <li>Test and adjust: Try the e-liquid and make any adjustments to the flavor or ratios if desired.</li>
                                    <li>Store and label: Store your e-liquid in a cool, dark place and label the bottle with the flavor, ratios, and any relevant information.</li>
                                </ol>
                                Please note that it's important to follow safety guidelines and handle nicotine with care if you choose to use it in your e-liquid.
                            </p>
                        </div>
                        <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                        </div>
                    </div>
                </div>

                <div className="bg-dark text-secondary px-4 py-5 text-center">
                    <div className="py-5">
                        <h1 className="display-5 fw-bold text-white">Ready to Dive Deeper?</h1>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <button type="button" className="btn btn-outline-light btn-lg px-4" onClick={() => window.location.href = 'https://www.vapingpost.com/'} target="_blank" rel="noopener noreferrer">Explore More</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default interContent;
