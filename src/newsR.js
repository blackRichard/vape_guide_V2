import React from "react";
import "./news.css"
export default function newsContent() {

    <div>
        <nav>
            <input type="checkbox" id="check" />
            <label for="check" class="checkbtn">
                <i class="fas fa-bars" aria-hidden="true"></i>
            </label>
            <a id="label_href" href="home.html">Vape Haven</a>
            <ul>
                <li><a href="home.html">Home</a></li>
                <li><a href="begginer.html">Begginer</a></li>
                <li><a href="Intermediate.html"> Intermediate</a></li>
                <li><a href="expert.html">Expert</a></li>
                <li><a href="news.html" class="active"> News</a></li>
                <li><a href="calculator.html"> Calculator</a></li>
            </ul>
        </nav>
        <div class="container">
            <header class="blog-header py-3">
                <div class="row flex-nowrap justify-content-between align-items-center">
                    {/* <div class="col-4 pt-1">
                        <a class="link-secondary" href="#">Subscribe</a>
                    </div>  */}

                </div>
            </header>

            {/* <div class="nav-scroller py-1 mb-2">
                <nav class="nav d-flex justify-content-between">
                    <a class="p-2 link-secondary" href="#">World</a>
                    <a class="p-2 link-secondary" href="#">U.S.</a>
                    <a class="p-2 link-secondary" href="#">Technology</a>
                    <a class="p-2 link-secondary" href="#">Design</a>
                    <a class="p-2 link-secondary" href="#">Culture</a>
                    <a class="p-2 link-secondary" href="#">Business</a>
                    <a class="p-2 link-secondary" href="#">Politics</a>
                    <a class="p-2 link-secondary" href="#">Opinion</a>
                    <a class="p-2 link-secondary" href="#">Science</a>
                    <a class="p-2 link-secondary" href="#">Health</a>
                    <a class="p-2 link-secondary" href="#">Style</a>
                    <a class="p-2 link-secondary" href="#">Travel</a>
                </nav>
            </div>  */}

            <div class="p-4 p-md-5 mb-4 text-white rounded bg-dark">
                <div class="col-md-6 px-0">
                    <h1 class="display-4 font-italic">Exploring E-liquids: Flavors, Ingredients, and Safety
                    </h1>
                    <p class="lead my-3">E-liquids are a crucial component of the vaping experience, offering a wide range
                        of flavors and nicotine options. We'll
                        explore the world of e-liquids, discussing popular flavors, the use of alternative ingredients, and
                        the importance of
                        safety standards. This post will shed light on the production process, regulatory considerations,
                        and the potential
                        impact on users.</p>
                    <p class="lead mb-0"><a href="#" class="text-white font-weight-bold">Continue reading...</a></p>
                </div>
            </div>

            <div class="row mb-2">
                <div class="col-md-6">
                    <div
                        class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div class="col p-4 d-flex flex-column position-static">
                            <strong class="d-inline-block mb-2 text-primary">World</strong>
                            <h3 class="mb-0">Health and Safety: Debunking Myths and Research Updates
                            </h3>
                            <div class="mb-1 text-muted">Nov 12</div>
                            <p class="card-text mb-auto">Vaping has been a subject of intense debate regarding its potential
                                health effects. In this blog post, we'll examine
                                recent scientific research and separate fact from fiction. We'll address concerns related to
                                vaping and lung health, the
                                impact of vaping on smoking cessation efforts, and the role of proper usage and regulations
                                in ensuring user safety.</p>
                            <a href="#" class="stretched-link">Continue reading</a>
                        </div>
                        <div class="col-auto d-none d-lg-block">
                            <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg"
                                aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" role="img"
                                focusable="false">
                                <title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
                                    dy=".3em">Thumbnail</text>
                            </svg>

                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div
                        class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div class="col p-4 d-flex flex-column position-static">
                            <strong class="d-inline-block mb-2 text-success">Design</strong>
                            <h3 class="mb-0">Vaping Culture and Community: Events, Influencers, and Advocacy
                            </h3>
                            <div class="mb-1 text-muted">Nov 11</div>
                            <p class="mb-auto">Vaping has fostered a vibrant community of enthusiasts, influencers, and
                                advocates. This blog post will delve into the
                                world of vaping culture, including vape conventions, community-building initiatives, and the
                                role of social media
                                influencers</p>
                            <a href="#" class="stretched-link">Continue reading</a>
                        </div>
                        <div class="col-auto d-none d-lg-block">
                            <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg"
                                aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" role="img"
                                focusable="false">
                                <title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
                                    dy=".3em">Thumbnail</text>
                            </svg>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <main class="container">
            <div class="row">
                <div class="col-md-8">
                    <h3 class="pb-4 mb-4 font-italic border-bottom">
                        From the Firehose
                    </h3>

                    <div class="blog-post">
                        <h2 class="blog-post-title">The Pros and Cons of Vaping: Unveiling the Facts</h2>
                        <p class="blog-post-meta">January 1, 2021 by <a href="#">Mark</a></p>

                        <p>
                            <h3>Introduction</h3> <br /> Vaping, the act of inhaling and exhaling vapor produced by an electronic
                            cigarette or similar
                            device, has gained
                            significant popularity in recent years. As a controversial alternative to traditional smoking,
                            vaping has ignited
                            intense debates regarding its potential benefits and risks. This article aims to provide a
                            comprehensive overview of
                            vaping, delving into both the positive and negative aspects associated with this phenomenon.</p>
                        <hr />
                        <p>
                            <h3>The Rise of Vaping</h3> <br />Vaping emerged as a concept in the early 2000s and quickly gained
                            traction as a perceived safer alternative to smoking.
                            Traditional cigarettes contain tobacco, which when burned, releases harmful chemicals that can cause
                            various health
                            issues. Vaping devices, on the other hand, heat a liquid (often containing nicotine) to create a
                            vapor that is inhaled.
                            This process eliminates the combustion and subsequent production of harmful smoke, tar, and carbon
                            monoxide.</p>
                        <h2>The Pros of Vaping</h2>
                        <ol>
                            <li>
                                <p>Harm Reduction: Vaping is commonly believed to be less harmful than traditional smoking.
                                    Studies
                                    have shown that vaping
                                    exposes users to fewer toxic chemicals and reduces the risks associated with tar and
                                    combustion
                                    by products.</p>
                            </li>
                            <li>
                                <p>Smoking Cessation Aid: Many people have successfully used vaping as a tool to quit
                                    smoking.
                                    The
                                    ability to control
                                    nicotine intake by gradually reducing the levels in e-liquids has helped individuals
                                    transition
                                    away from traditional
                                    cigarettes.</p>
                            </li>
                            <li>
                                <p>Odor and Convenience: Vaping produces vapor that dissipates quickly and does not leave
                                    behind
                                    the
                                    lingering odor
                                    associated with smoking. Vaping devices are also compact and portable, making them
                                    convenient
                                    for those on the go.</p>
                            </li>
                            <li>
                                <p>Flavor Variety: Vaping allows users to choose from a wide range of e-liquid flavors,
                                    catering
                                    to
                                    individual preferences.
                                    This variety can enhance the vaping experience and make it more enjoyable for those who
                                    have
                                    switched from smoking.
                                </p>
                            </li>
                        </ol>
                        <h3>The Cons of Vaping</h3>
                        <ol>
                            <li>
                                <p>Health Risks: Although vaping is considered less harmful than smoking, it is not entirely
                                    risk-free. The long-term
                                    health effects of vaping are still not well understood, and certain chemicals present in
                                    e-liquids have been associated
                                    with respiratory and cardiovascular issues.</p>
                            </li>

                            <li>

                                <p>Youth Appeal: The popularity of vaping among teenagers and young adults has raised
                                    concerns.
                                    The
                                    enticing flavors, sleek
                                    designs, and discreet nature of vaping devices have made them attractive to a younger
                                    demographic, potentially leading
                                    to nicotine addiction and subsequent tobacco use.</p>
                            </li>
                            <li>
                                <p>Lack of Regulation: The vaping industry has faced challenges with regulations and
                                    standards.
                                    The
                                    lack of strict
                                    guidelines has resulted in inconsistencies in product quality, safety standards, and
                                    accurate
                                    labeling.</p>
                            </li>
                            <li>
                                <p>Nicotine Addiction: While some vapers use nicotine-free e-liquids, many continue to
                                    consume
                                    nicotine through their
                                    vaping devices. Nicotine is an addictive substance that can lead to dependence and
                                    potential
                                    health risks, especially
                                    for young people.</p>
                            </li>
                        </ol>
                        <h3>Conclusion</h3>
                        <p>Vaping is a complex and polarizing topic with both advantages and disadvantages. While it may
                            serve as a harm reduction
                            tool for adult smokers looking to quit, caution must be exercised to prevent unintended
                            consequences, especially among
                            the younger population. Robust research, regulations, and public awareness campaigns are
                            necessary to provide clear
                            guidance on the potential risks and benefits associated with vaping.

                            As with any decision regarding personal health, individuals should carefully evaluate the
                            available information, consult
                            medical professionals, and make informed choices. It is important to stay up to date with
                            evolving research and stay
                            mindful of potential risks while weighing the perceived benefits of vaping.
                        </p>
                        <ul>
                            <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
                            <li>Donec id elit non mi porta gravida at eget metus.</li>
                            <li>Nulla vitae elit libero, a pharetra augue.</li>
                        </ul>
                        <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.
                        </p>
                        <ol>
                            <li>Vestibulum id ligula porta felis euismod semper.</li>
                            <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>
                            <li>Maecenas sed diam eget risus varius blandit sit amet non magna.</li>
                        </ol>
                        <p>Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.</p>
                    </div>
                    <div class="blog-post">
                        <h2 class="blog-post-title">Another blog post</h2>
                        <p class="blog-post-meta">December 23, 2020 by <a href="#">Jacob</a></p>

                        <p>Cum sociis natoque penatibus et magnis <a href="#">dis parturient montes</a>, nascetur ridiculus
                            mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere
                            consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
                        <blockquote>
                            <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong>
                                ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                        </blockquote>
                        <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet
                            fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
                        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non
                            commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus,
                            porta ac consectetur ac, vestibulum at eros.</p>
                    </div>

                    <div class="blog-post">
                        <h2 class="blog-post-title">New feature</h2>
                        <p class="blog-post-meta">December 14, 2020 by <a href="#">Chris</a></p>

                        <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean
                            lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod.
                            Fusce
                            dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo
                            sit
                            amet risus.</p>
                        <ul>
                            <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
                            <li>Donec id elit non mi porta gravida at eget metus.</li>
                            <li>Nulla vitae elit libero, a pharetra augue.</li>
                        </ul>
                        <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit
                            amet
                            fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
                        <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra
                            augue.
                        </p>
                    </div>

                    <nav class="blog-pagination">
                        <a class="btn btn-outline-primary" href="#">Older</a>
                        <a class="btn btn-outline-secondary disabled" href="#" tabindex="-1" aria-disabled="true">Newer</a>
                    </nav>

                </div>

                <aside class="col-md-4">
                    <div class="p-4 mb-3 bg-light rounded">
                        <h4 class="font-italic">About us</h4>
                        <p class="mb-0">We are modern company that provide help for smokers. Quit smoking is so hard and
                            e-ciggarete is the most efficent solution.</p>
                    </div>

                    <div class="p-4">
                        <h4 class="font-italic">Archives</h4>
                        <ol class="list-unstyled-mb-0">
                            <li><a href="#" class="archives">March 2021</a></li>
                            <li><a href="#" class="archives">February 2021</a></li>
                            <li><a href="#" class="archives">January 2021</a></li>
                            <li><a href="#" class="archives">December 2020</a></li>
                            <li><a href="#" class="archives">November 2020</a></li>
                            <li><a href="#" class="archives">October 2020</a></li>
                            <li><a href="#" class="archives">September 2020</a></li>
                            <li><a href="#" class="archives">August 2020</a></li>
                            <li><a href="#" class="archives">July 2020</a></li>
                            <li><a href="#" class="archives">June 2020</a></li>
                            <li><a href="#" class="archives">May 2020</a></li>
                            <li><a href="#" class="archives">April 2020</a></li>
                        </ol>
                    </div>

                    <div class="p-4">
                        <h4 class="font-italic">Elsewhere</h4>
                        <ol class="list-unstyled">
                            <li> <a href="github.com"></a></li> <span> <i class="fa fa-github"
                                aria-hidden="true"></i></span>
                            <li> <a href="twitter.com"></a></li> <span> <i id="" class="fa-brands fa-twitter fa-fade"
                                style="color: #301b98;"></i></span>
                            <li> <a href="facebook.com"></a></li><span> <i
                                class="fa-brands fa-facebook fa-bounce"></i></span>

                        </ol>

                    </div>
                </aside>
                <i id="" class="fa-brands fa-twitter fa-fade" style="color: #301b98;"></i>
            </div>
            {/* /.row  */}

        </main>
        {/* /.container  */}

        <footer class="blog-footer">
            <p>Blog template built for <a href="https://getbootstrap.com/">Bootstrap</a> by <a
                href="https://twitter.com/mdo">@mdo</a>.</p>
            <p>
                <a href="#">Back to top</a>
            </p>
        </footer>



    </div>
}