//*** SHIM ***

$('body').ready(() => {

    const imagesUrl = [
        {
            color: './assets/slide/1.jpg',
            bw: './assets/slide/1-bw.jpg',
            n: './assets/slide/n1.png',
            nbw: './assets/slide/n1-black.png',
            description: 'We empower our users and help them to achieve their personal, creative and charitable goals.',
            title: 'What drives us?',
            modal: `
            <p class="modalText">Transforming the commercial landscape across the Internet,
            BrodTi.com aims to reward the Internet users for the
            value they add to any corporate brand.</p><br />

          <p class="modalText">Presently,
            companies are using the Internet only to monetize
            their balance sheet and maximize the wealth of the
            founders. Without Internet users, these gigantic
            websites’ value would be zero and yet these
            companies have not been rewarding the users the
            way they should.</p><br />

          <p class="modalText">Through BrodTi.com,
            we empower our website users with our three websites
            platforms, so they can achieve their personal,
            creative and charitable goals. We have designed
            these sites to benefit all Internet users seeking
            assistance for their projects and initiatives.
            Our mission is your achievement.</p>
            `,
        },
        {
            color: './assets/slide/2.jpg',
            bw: './assets/slide/2-bw.jpg',
            n: './assets/slide/n2.png',
            nbw: './assets/slide/n2-black.png',
            description: 'A video/AD plataform for everyone who works for Tips.',
            title: 'MyTipLife.com',
            modal: `
            <p class="modalText">More tips and visibility for you!Get more supporters! We help you export your art with an online platform and physical products to make it easier to make money and expand your network.</p><br />

            <p class="modalText">With MyTipLife you'll be part of our community to get exclusive discounts & updates. You'll increase and optimize your revenue, work on your personal brand, and tell your story.</p>`,
        },
        {
            color: './assets/slide/3.jpg',
            bw: './assets/slide/3-bw.jpg',
            n: './assets/slide/n3.png',
            nbw: './assets/slide/n3-black.png',
            description: 'A plataform for Charities, individuals and filmmarkers (storytellers)',
            title: 'FeedOurLife.com',
            modal: `
            <p class="modalText">Feed Our Life are the lead innovators of accountable crowdfunding. Our model sends all donations directly to project necessities via our charity money managers. Due to our incredible system, donations are tax deductible. Help your neighbors, friends, and new pals with our crowdfunding process. It's guaranteed to change your life and theirs, too.</p><br />

          <p class="modalText">We welcome organizations large and small. Individuals and charities can set projects customized for their needs with a few clicks.</p><br />

          <p class="modalText">Charities can submit and then create projects for those in need. All project funds go directly to the Charity to distribute.</p>`,

        },
        {
            color: './assets/slide/4.jpg',
            bw: './assets/slide/4-bw.jpg',
            n: './assets/slide/n4.png',
            nbw: './assets/slide/n4-black.png',
            description: 'Spend time doing what you love, earn coins and donate your virtual cash to projects that you love.',
            title: 'TimeFund.com',
            modal: `
            <p class="modalText">Simply spend time surfing, watching videos, gaming, and other fun stuff. You’ll earn coins that you can deposit into your virtual piggy bank. Then donate your virtual cash to projects that you love.</p>            `,
        },
        {
            color: './assets/slide/5.jpg',
            bw: './assets/slide/5-bw.jpg',
            n: './assets/slide/n5.png',
            nbw: './assets/slide/n5-black.png',
            description: 'If you make great music that the world needs to hear, here is the place to make that happen.',
            title: 'FeedTheArts.com',
            modal: `
            <p class="modalText">If you make great films that the world needs to watch, here is the place to make that happen.</p>`,
        },
        {
            color: './assets/slide/6.jpg',
            bw: './assets/slide/6-bw.jpg',
            n: './assets/slide/n6.png',
            nbw: './assets/slide/n6-black.png',
            description: 'BrodTi Media currently has one APPROVED (July 18, 2019) patent and two pending patents.',
            title: 'Patents',
            modal: `
            <p class="modalText">Brodti Media currently has one APPROVED (July 18,2019)patent and two pending patents. Our approved patent was first filed in 2004 ahead of the largest sites in the world. The approved patent business method is members of a website putting content and the website posting ads and sharing that revenue with the content creator. Sound familiar? Well we created the method and have a patent and filing to prove it. We have been fighting against the largest Internet companies to insure these patents our beneficial to you.</p><br />

          <p class="modalText">Our Second Patent is pending. The patent eliminates Crowd-funding Fraud by having funds raised go to a Service Provider, Money Manager or Charity who facilities those funds for project goal.</p><br />

          <p class="modalText">Our Third Patent is an advertising patent. It allows rewards to an Internet user based on their preferences from sites they follow.</p>
            `,
        },
        {
            color: './assets/slide/7.jpg',
            bw: './assets/slide/7-bw.jpg',
            n: './assets/slide/n7.png',
            nbw: './assets/slide/n7-black.png',
            description: 'Place your ads on our network of websites where the Internet user sees your ad and instantly develops a positive perception about your brand.',
            title: 'Advertisers',
            modal: `
            <p class="modalText">BrodTi.com has acquired very sizable advertising commitments that are going to bring several opportunities for the potential advertisers. For instance, when we do the outreach to charities on feedourlife, the visitors will also look the BrodTi. site and our strategic partners.</p><br />

          <p class="modalText">There is no stronger brand loyalty a brand can earn when an artist, visiting and participating at our site, realizes that this brand has funded their projects on our sites. This is exactly the motive behind brodti when it comes to the benefits it intends to provide to the alliances and advertisers.</p><br />`,
        }
    ]

    imagesUrl.forEach(img => {
        preloadImage(img.color);
        preloadImage(img.bw);
        preloadImage(img.n);
        preloadImage(img.nbw);
    })

    function preloadImage(url) {
        var img = new Image();
        img.src = url;
    }

    window.requestAnimFrame = (function () {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            };
    })();

    (function () {
        "use strict";
        $('#slideshow-mobile').css('background-image', `url("./assets/slide/1-bw.jpg")`);
        $('p.description').text(imagesUrl[0].description);
        $('aside h2').text(imagesUrl[0].title);
        $('div.modal').html(imagesUrl[0].modal);

        //************
        //VARIABLES
        //************
        var _Canvas;
        let _backImage = imagesUrl[0].color;
        let _frontImage = imagesUrl[0].bw;
        let _blackMask;
        let _mouseX = 0;
        let _mouseY = 0;
        let _maskCount = 25;
        let _tweenTime = 0.5;
        let _pauseTime = 0.25;
        let _delayTime = 0.08;
        let _maskArray = [];
        let _srcArray = ["http://insidedown.com/codepen/stock/newstain1.png", "http://insidedown.com/codepen/stock/newstain2.png", "http://insidedown.com/codepen/stock/newstain3.png"];

        //************
        //METHODS
        //************
        function init() {
            _Canvas = new Canvas({ stage: document.getElementById('stage') });
            _backImage = new MaskedImage({ src: _backImage });
            _frontImage = new MaskedImage({ src: _frontImage });

            for (let i = 0; i < _maskCount; i++) {
                let ranSrc = _srcArray[Math.floor(Math.random() * _srcArray.length)];
                let mask = new MaskedImage({ src: ranSrc, delay: i, width: 300 });
                _maskArray.push(mask);
            }
            addListeners();
        }



        //************
        //EVENTS
        //************
        function addListeners() {
            _Canvas.el.addEventListener('mousemove', onCanvasMouseMove);
            _Canvas.el.addEventListener('mouseout', onCanvasMouseOut);
        }

        function onCanvasMouseMove(event) {
            _mouseX = event.pageX - $(this).offset().left;
            _mouseY = event.pageY - $(this).offset().top;
        }

        function onCanvasMouseOut(event) {
            //Esconder bitimages
        }

        async function changeImage(to) {
            $('canvas').css('opacity', '0')
            $('#slideshow-mobile').css('opacity', '0');
            const currentImage = Number($('nav').attr('value'));
            const modalActive = $('.modal').attr('value');
            if (modalActive == '0') {
                $('.more').click();
                setTimeout(() => { changeImage(to) }, 420)
                return;
            }
            const newImage = to === 'next' ? currentImage === 7 ? 1 : currentImage + 1 : currentImage === 1 ? 7 : currentImage - 1;
            const image = imagesUrl[newImage - 1];

            setTimeout(() => {
                _backImage = image.color;
                _frontImage = image.bw;
                _backImage = new MaskedImage({ src: _backImage });
                _frontImage = new MaskedImage({ src: _frontImage });
                drawStage()
                $('#slideshow-mobile').css('background-image', `url("${image.bw}")`)
                $('#slideshow-mobile').attr('value', newImage)
                $('#slideshow-mobile').css('opacity', '1');
                $('nav').attr('value', newImage);
                $('.index').attr('src', image.nbw);
                $('canvas').css('opacity', '1');
                $('p.description').text(image.description);
                $('div.modal').html(image.modal);
                $('aside h2').text(image.title)
            }, 500)
        }

        function handleClickImage(mouseEvent) {

            $('canvas').css('opacity', '0');
            const newImage = Number($('nav').attr('value'));
            const image = imagesUrl[newImage - 1];

            setTimeout(() => {
                _backImage = image.color;
                if (mouseEvent === 'mouseup') {
                    $('p.description').fadeOut(100);
                    _frontImage = image.bw;
                    $('.index').attr('src', `${mouseEvent === 'mouseup' ? image.nbw : image.n}`);
                    $('nav button#nextButton').css('background', `url('https://i.ibb.co/RyLdwsG/arrow-right-black.png') no-repeat center`);
                    $('nav button#prevButton').css('background', `url('https://i.ibb.co/FDsfg2R/arrow-left-black.png') no-repeat center`);
                    $('.linksToNavigation a').css('color', '#000');
                    $('.modal').addClass('animate__backOutRight');
                    $('.modal').attr('value', '1');
                    $('div.horizontal').css('transform', 'rotate(0deg)');
                }

                if (mouseEvent === 'mousedown') {
                    $('p.description').fadeIn(100);
                    _frontImage = image.color;
                    $('.index').attr('src', `${mouseEvent === 'mouseup' ? image.nbw : image.n}`);
                    $('nav button#nextButton').css('background', `url('https://i.ibb.co/HzFYXFt/arrow-right.png') no-repeat center`);
                    $('nav button#prevButton').css('background', `url('https://i.ibb.co/PWdVn13/arrow-left.png') no-repeat center`);
                    $('.linksToNavigation a').css('color', '#fff');
                }

                _backImage = new MaskedImage({ src: _backImage });
                _frontImage = new MaskedImage({ src: _frontImage });

                $('canvas').css('opacity', '1');
            }, 280);
        }

        function activeColorMobile() {
            const currentImage = Number($('#slideshow-mobile').attr('value'));
            $('#slideshow-mobile').css('background-image', `url("${imagesUrl[currentImage - 1].color}")`)
            $('aside h2').css('color', '#fff');
            $('button.more div.line').css('background-color', '#fff');
            $('.linksToNavigation a').css('color', '#fff');
            $('.index').attr('src', `${imagesUrl[currentImage - 1].n}`);
            $('p.description').show();
            $('#prevButtonResponsive').css('background-image', 'url("https://i.ibb.co/ZSG7Rnr/arrow-left.png")')
            $('#nextButtonResponsive').css('background-image', 'url("https://i.ibb.co/JKCbvkN/arrow-right.png")')
        }

        function desactiveColorMobile() {
            setTimeout(() => {
                const currentImage = Number($('#slideshow-mobile').attr('value'));
                $('.index').attr('src', imagesUrl[currentImage - 1].nbw);
                $('#slideshow-mobile').css('background-image', `url("${imagesUrl[currentImage - 1].bw}")`)
                $('aside h2').css('color', '#3B424F');
                $('.linksToNavigation a').css('color', '#3B424F');
                $('button.more div.line').css('background-color', '#3B424F');
                $('p.description').hide();
                $('#prevButtonResponsive').css('background-image', 'url("https://i.ibb.co/sV3fqx7/arrow-left-black.png")')
                $('#nextButtonResponsive').css('background-image', 'url("https://i.ibb.co/yQHt48d/arrow-right-black.png")')
            }, [500])
        }

        $('#slideshow-mobile').click(() => {
            activeColorMobile();
        });

        $('.more').click(() => {
            clearInterval(intervalButton);
            $('.modal').show();

            if ($(window).width() < 1100) {
                if ($('.modal').attr('value') === '0') {
                    $('.modal').addClass('animate__backOutRight');
                    $('.modal').attr('value', '1');
                    $('div.horizontal').css('transform', 'rotate(0deg)');
                    desactiveColorMobile()

                } else {
                    $('.modal').removeClass('animate__backOutRight');
                    $('.modal').attr('value', '0');
                    $('.more img').attr('src', '../../assets/icons/more.svg');
                    $('div.horizontal').css('transform', 'rotate(90deg)');
                    activeColorMobile();
                    $('p.description').hide();
                }
            } else {
                if ($('.modal').attr('value') === '0') {
                    $('.modal').addClass('animate__backOutRight');
                    $('.modal').attr('value', '1');
                    $('div.horizontal').css('transform', 'rotate(0deg)')
                    handleClickImage('mouseup');
                } else {
                    $('.modal').removeClass('animate__backOutRight');
                    $('.modal').attr('value', '0');
                    $('.more img').attr('src', '../../assets/icons/more.svg');
                    $('div.horizontal').css('transform', 'rotate(90deg)')
                    handleClickImage('mousedown');
                }
            }
        })

        $('#prevButton').click(() => {
            changeImage('prev');
        });

        $('#nextButton').click(() => {
            changeImage('next');
        });

        $('#prevButtonResponsive').click(() => {
            changeImage('prev');
            desactiveColorMobile();
        });

        $('#nextButtonResponsive').click(() => {
            changeImage('next');
            desactiveColorMobile();
        });

        $('#stage').mousedown(() => {
            handleClickImage('mousedown');
        });

        $('#stage').mouseup(() => {
            handleClickImage('mouseup');
        });

        $('a#about').mouseenter(() => {
            if ($('.modal').attr('value') == '1') {
                $('a#about').css('color', '#fff');
            }

        });

        $('a#about').mouseleave(() => {
            if ($('.modal').attr('value') == '1') {
                $('a#about').css('color', '#000');
            }

        });

        $('a#contact').mouseenter(() => {
            if ($('.modal').attr('value') == '1') {
                $('a#contact').css('color', '#fff');
            }

        });

        $('a#contact').mouseleave(() => {
            if ($('.modal').attr('value') == '1') {
                $('a#contact').css('color', '#000');

            }
        });

        const intervalButton = setInterval(() => {
            $('.more').hide(0)
            $('.more').show(0)

        }, 5000)

        function onEnterFrame() {
            _Canvas.clearStage();
            drawStage();
            window.requestAnimFrame(onEnterFrame, 60);
        }

        function drawStage() {
            _Canvas.context.save();

            for (let i = 0; i < _maskCount; i++) {
                let mask = _maskArray[i];
                mask.tweenDraw();
            }
            //_blackMask.draw(_mouseX,_mouseY);
            _Canvas.context.globalCompositeOperation = 'source-in';
            _backImage.draw();
            _Canvas.context.globalCompositeOperation = 'destination-over';
            _frontImage.draw();
            _Canvas.context.restore();
        }


        //************
        //CLASSES
        //************

        class MaskedImage {
            constructor(options) {
                this.hasImg = false;
                this.img = new Image();
                this.empty = { scale: 0, alpha: 1, x: 0, y: 0 };
                this.delay = options.delay;
                this.rotation = Math.random() * 360;
                this.width = options.width;
                this.halfWidth = this.width / 2;
                this.img.src = options.src;
                this.img.onload = function () {
                    this.hasImg = true;
                    if (this.delay) {
                        setTimeout(function () { this.scale(); }.bind(this), this.delay * (_delayTime * 1000));
                    }
                    this.draw();
                }.bind(this);
            }

            draw(x = 0, y = 0) {
                if (this.hasImg) {
                    _Canvas.context.drawImage(this.img, 0, 0, $(document).width(), $(document).height(), 200, 0, $(document).width(), $(document).height())
                }
            }



            tweenDraw() {
                if (this.hasImg) {
                    let curWidth = this.width * this.empty.scale;
                    _Canvas.context.save();
                    _Canvas.context.globalAlpha = this.empty.alpha;
                    _Canvas.context.translate(this.empty.x, this.empty.y);
                    _Canvas.context.rotate(this.rotation * Math.PI / 180);
                    _Canvas.context.scale(1.5 * (curWidth / this.width), 1.5 * (curWidth / this.width));
                    _Canvas.context.translate(-this.empty.x, -this.empty.y);
                    _Canvas.context.drawImage(this.img, this.empty.x - this.halfWidth, this.empty.y - this.halfWidth);
                    _Canvas.context.globalAlpha = 1;
                    _Canvas.context.restore();
                }
            }

            scale() {
                this.empty.x = _mouseX;
                this.empty.y = _mouseY;
                this.rotation = Math.random() * 360;
                TweenMax.fromTo(this.empty, _tweenTime, { alpha: 1, scale: 0 }, {
                    alpha: 1,
                    scale: 1,
                    onComplete: function () {
                        setTimeout(this.fadeOut.bind(this), _pauseTime * 1000);
                    }.bind(this)
                });
            }

            fadeOut() {
                TweenMax.to(this.empty, _tweenTime, { alpha: 0, onComplete: this.scale.bind(this) });
            }

        }

        class Canvas {
            constructor(options) {
                this._stage = options.stage;
                this._stageWidth = this._stage.width = window.innerWidth;
                this._stageHeight = this._stage.height = window.innerHeight;
                this._stageContext = this._stage.getContext('2d');
            }

            // clear stage of current content
            clearStage(options) {
                if (typeof options === "undefined") {
                    this._stageContext.clearRect(0, 0, this._stageWidth, this._stageHeight);
                }
            }

            get width() { return this._stageWidth; }
            get height() { return this._stageHeight; }
            get el() { return this._stage; }
            get context() { return this._stageContext; }
        } //end Canvas class

        init();
        onEnterFrame();
        $('body').show();

    })();


})
