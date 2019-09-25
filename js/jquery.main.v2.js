function initOnScreen() {
    var c;
    (c = jQuery).expr[":"].onScreen = function(t) {
        var e = c(window)
          , i = e.scrollTop() + 110
          , s = e.height()
          , o = i + s
          , n = c(t)
          , r = n.offset().top
          , a = n.height()
          , l = r + a;
        return i <= r && r < o || i < l && l <= o || s < a && r <= i && o <= l
    }
}
function initLinkSelectable() {
    /Windows Phone/.test(navigator.userAgent) || "ontouchstart"in window || window.DocumentTouch && (document,
    DocumentTouch)
}
function initHeadroom() {
    var n = jQuery(this)
      , r = jQuery("#header .header-holder");
    jQuery("[data-headroom]").headroom({
        offset: 50
    }),
    0 !== $(".subnav-holder").height() && !$(".subnav-holder").hasClass("hiddenclass") || $("#header").addClass("sticky-header"),
    jQuery(".subnav-holder").each(function() {
        var t = jQuery(this)
          , e = r.length && r.outerHeight(!0) || 0
          , i = !1;
        function s() {
            e = r.length && r.outerHeight(!0) || 0,
            o()
        }
        function o() {
            n.scrollTop() <= e ? i || (i = !0,
            t.addClass("on-static")) : i && (i = !1,
            t.removeClass("on-static"))
        }
        s(),
        n.on("scroll", o).on("load resize", s)
    })
}
function initDropDownClasses() {
    jQuery("#nav li").each(function() {
        var t = jQuery(this)
          , e = t.find(".drop")
          , i = t.find("a").eq(0);
        e.length && (t.addClass("has-drop-down"),
        i.length && i.addClass("has-drop-down-a"))
    })
}
function initMobileNav() {
    var l = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    ResponsiveHelper.addRange({
        "..960": {
            on: function() {
                jQuery("body").mobileNav({
                    menuActiveClass: "nav-active",
                    menuOpener: ".nav-opener",
                    hideOnClickOutside: !0,
                    menuDrop: ".nav-bar"
                })
            },
            off: function() {
                jQuery("body").mobileNav("destroy")
            }
        }
    }),
    ResponsiveHelper.addRange({
        "..960": {
            on: function() {
                var t = 0
                  , n = jQuery(".subnav-holder")
                  , r = n.find(".subnav")
                  , a = jQuery(window);
                function e() {
                    var t = n.outerHeight()
                      , e = n.offset().top + t
                      , i = Math.max(0, a.scrollTop())
                      , s = Math.max(l ? e : 0, e - i)
                      , o = "fixed" === n.css("position");
                    r.css({
                        top: o ? t : s
                    })
                }
                jQuery("html").mobileNav({
                    menuActiveClass: "subnav-active",
                    menuOpener: ".subnav-opener",
                    hideOnClickOutside: !0,
                    menuDrop: ".subnav",
                    onBeforeShow: function() {
                        0 < (t = a.scrollTop()) && jQuery("html").addClass("subnav-active-scroll"),
                        e(),
                        a.on("scroll", e)
                    },
                    onHide: function() {
                        a.scrollTop(t),
                        jQuery("html").removeClass("subnav-active-scroll"),
                        a.off("scroll", e)
                    }
                })
            },
            off: function() {
                jQuery("html").mobileNav("destroy")
            }
        }
    })
}
function initPrognroll() {
    jQuery("body").prognroll({
        appendTo: "#header .progress",
        class: "progress-bar",
        height: 2,
        color: "#2bb031"
    })
}
function initFormValidation() {
    jQuery(".form-validation").formValidation({
        errorClass: "input-error",
        addClassToParent: ".row",
        successClass: "form-success"
    }),
    jQuery(".contact-form-validation").formValidation({
        errorClass: "input-error",
        addClassToParent: ".row-box",
        successClass: "form-success"
    })
}
function initCodeBoxCopy() {}
function initAnchors() {
    new SmoothScroll({
        anchorLinks: ".accordion a",
        extraOffset: 0,
        activeClasses: "link",
        wheelBehavior: "none"
    })
}
function initAccordion() {
    jQuery(".accordion").slideAccordion({
        opener: ">.opener",
        slider: ">.slide",
        animSpeed: 300
    }),
    ResponsiveHelper.addRange({
        "..960": {
            on: function() {
                jQuery("#nav").slideAccordion({
                    opener: ".has-drop-down > a",
                    slider: ".drop",
                    animSpeed: 300
                })
            },
            off: function() {
                jQuery("#nav").slideAccordion("destroy")
            }
        }
    }),
    ResponsiveHelper.addRange({
        "..767": {
            on: function() {
                jQuery(".country-tab-content").slideAccordion({
                    opener: ".country-opener",
                    slider: ".country-list",
                    animSpeed: 300,
                    scrollToActiveItem: {
                        enable: !0,
                        extraOffset: 0
                    }
                })
            },
            off: function() {
                jQuery(".country-tab-content").slideAccordion("destroy")
            }
        }
    })
}
function initTooltip() {
    $('[data-toggle="tooltip"]').tooltip()
}
function initSameHeight() {
    jQuery(".landing-tabs").sameHeight({
        elements: ".tab-pane",
        flexible: !0,
        biggestHeight: !0
    }),
    jQuery(".solution-section").sameHeight({
        elements: ".solution-box",
        flexible: !0,
        multiLine: !0,
        skipClass: "large",
        biggestHeight: !0
    }),
    jQuery("body").sameHeight({
        elements: ".equal-height",
        flexible: !0,
        multiLine: !0,
        skipClass: "large",
        biggestHeight: !0
    }),
    $(".page-pricing .communication-block:first p").css("height", $(".communication-block:last p").height())
}
function initSlickCarousel() {
    jQuery(".slick-slider").slick({
        slidesToScroll: 1,
        rows: 0,
        slidesToShow: 3,
        infinite: !1,
        prevArrow: '<button class="prev">Previous</button>',
        nextArrow: '<button class="next">Next</button>',
        responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    })
}
function initCustomForms() {
    jcf.setOptions("Select", {
        wrapNative: !1,
        fakeDropInBody: !1
    }),
    jcf.replaceAll()
}
function initSlideShow() {
    jQuery(".slideshow").fadeGallery({
        slides: ".slide",
        btnPrev: ".btn-prev",
        btnNext: ".btn-next",
        autoRotation: !0,
        switchTime: 1e4,
        circularRotation: !1,
        animSpeed: 0,
        initialHeight: $(".slide").eq(0).outerHeight(!0),
        pauseOnHover: !1
    })
}
function initStickyScrollBlock() {
    ResponsiveHelper.addRange({
        "992..": {
            on: function() {
                jQuery(".social-links.fixed-links").stickyScrollBlock({
                    setBoxHeight: !1,
                    activeClass: "fixed-position",
                    container: ".article-section",
                    positionType: "fixed"
                })
            },
            off: function() {
                jQuery(".social-links.fixed-links").stickyScrollBlock("destroy")
            }
        }
    }),
    ResponsiveHelper.addRange({
        "992..": {
            on: function() {
                jQuery(".language-bar").stickyScrollBlock({
                    setBoxHeight: !1,
                    activeClass: "fixed-style",
                    positionType: "fixed",
                    animDelay: .3
                })
            },
            off: function() {
                jQuery(".language-bar").stickyScrollBlock("destroy")
            }
        }
    }),
    jQuery(".article-section").each(function() {
        var t = jQuery(this)
          , e = t.find(".fixed-links")
          , i = t.offset().top
          , s = t.outerHeight()
          , o = "hidden-fixed"
          , n = jQuery(window)
          , r = !1
          , a = function() {
            return window.innerHeight || document.documentElement.clientHeight
        };
        function l() {
            i = t.offset().top,
            s = t.outerHeight(),
            c()
        }
        function c() {
            n.scrollTop() >= i + s - a() ? r || (r = !0,
            e.addClass(o)) : r && (r = !1,
            e.removeClass(o))
        }
        l(),
        n.on("load resize", l).on("scroll", c)
    })
}
$(document).ready(function() {
    initPrognroll(),
    initCustomForms(),
    initHeadroom(),
    initStickyScrollBlock(),
    initSlickCarousel(),
    initSameHeight(),
    initTooltip(),
    initDropDownClasses(),
    initAccordion(),
    initAnchors(),
    initSlideShow(),
    initCodeBoxCopy(),
    initFormValidation(),
    initMobileNav(),
    initLinkSelectable(),
    initOnScreen()
}),
window.addEventListener("load", function() {
    var t = document.querySelector("html");
    t && t.classList.add("loaded")
});
var GrayScaleFix = function() {
    function i(i) {
        var s = new Image;
        s.onload = function() {
            var t = document.createElement("span")
              , e = '<svg xmlns="http://www.w3.org/2000/svg" id="svgroot" viewBox="0 0 ' + s.width + " " + s.height + '" width="100%" height="100%"><defs><filter id="gray"><feColorMatrix type="matrix" values="0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0" /></filter></defs><image filter="url(&quot;#gray&quot;)" x="0" y="0" width="' + s.width + '" height="' + s.height + '" preserveAspectRatio="none" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="' + s.src + '" /></svg>';
            t.innerHTML = e,
            t.className = "grayscale-fix",
            i.parentNode.insertBefore(t, i),
            i.style.cssText += "visibility:hidden;display:block",
            t.querySelector("svg").style.position = "absolute",
            t.style.cssText = "display:inline-block;position:relative;",
            t.appendChild(i)
        }
        ,
        s.src = i.src
    }
    function t() {
        for (var t = document.querySelectorAll("img.grayscale"), e = 0; e < t.length; e++)
            i(t[e])
    }
    return /(MSIE 10)|(Trident.*rv:11\.0)|( Edge\/[\d\.]+$)/.test(navigator.userAgent) && document.addEventListener("DOMContentLoaded", t),
    {
        replace: i,
        refresh: t
    }
}();
!function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : t.jcf = e(jQuery)
}(this, function(r) {
    "use strict";
    var o = []
      , a = {
        optionsKey: "jcf",
        dataKey: "jcf-instance",
        rtlClass: "jcf-rtl",
        focusClass: "jcf-focus",
        pressedClass: "jcf-pressed",
        disabledClass: "jcf-disabled",
        hiddenClass: "jcf-hidden",
        resetAppearanceClass: "jcf-reset-appearance",
        unselectableClass: "jcf-unselectable"
    }
      , t = "ontouchstart"in window || window.DocumentTouch && document instanceof window.DocumentTouch
      , e = /Windows Phone/.test(navigator.userAgent);
    a.isMobileDevice = !(!t && !e);
    var i = /(iPad|iPhone).*OS ([0-9_]*) .*/.exec(navigator.userAgent);
    i = i && parseFloat(i[2].replace(/_/g, ".")),
    a.ios = i;
    !function() {
        var t, e = navigator.pointerEnabled || navigator.msPointerEnabled, i = "ontouchstart"in window || window.DocumentTouch && document instanceof window.DocumentTouch, o = {};
        t = e ? {
            pointerover: navigator.pointerEnabled ? "pointerover" : "MSPointerOver",
            pointerdown: navigator.pointerEnabled ? "pointerdown" : "MSPointerDown",
            pointermove: navigator.pointerEnabled ? "pointermove" : "MSPointerMove",
            pointerup: navigator.pointerEnabled ? "pointerup" : "MSPointerUp"
        } : {
            pointerover: "mouseover",
            pointerdown: "mousedown" + (i ? " touchstart" : ""),
            pointermove: "mousemove" + (i ? " touchmove" : ""),
            pointerup: "mouseup" + (i ? " touchend" : "")
        },
        r.each(t, function(i, t) {
            r.each(t.split(" "), function(t, e) {
                o[e] = i
            })
        }),
        r.each(t, function(t, e) {
            e = e.split(" "),
            r.event.special["jcf-" + t] = {
                setup: function() {
                    var i = this;
                    r.each(e, function(t, e) {
                        i.addEventListener ? i.addEventListener(e, s, !1) : i["on" + e] = s
                    })
                },
                teardown: function() {
                    var i = this;
                    r.each(e, function(t, e) {
                        i.addEventListener ? i.removeEventListener(e, s, !1) : i["on" + e] = null
                    })
                }
            }
        });
        var n = null
          , s = function(t) {
            var e = t || window.event
              , i = null
              , s = o[e.type];
            if ((t = r.event.fix(e)).type = "jcf-" + s,
            e.pointerType)
                switch (e.pointerType) {
                case 2:
                    t.pointerType = "touch";
                    break;
                case 3:
                    t.pointerType = "pen";
                    break;
                case 4:
                    t.pointerType = "mouse";
                    break;
                default:
                    t.pointerType = e.pointerType
                }
            else
                t.pointerType = e.type.substr(0, 5);
            return t.pageX || t.pageY || (i = e.changedTouches ? e.changedTouches[0] : e,
            t.pageX = i.pageX,
            t.pageY = i.pageY),
            "touchend" === e.type && (n = {
                x: t.pageX,
                y: t.pageY
            }),
            "mouse" === t.pointerType && n && function(t) {
                var e = Math.abs(t.pageX - n.x)
                  , i = Math.abs(t.pageY - n.y);
                if (e <= 25 && i <= 25)
                    return !0
            }(t) ? void 0 : (r.event.dispatch || r.event.handle).call(this, t)
        }
    }(),
    function() {
        var t = ("onwheel"in document || 9 <= document.documentMode ? "wheel" : "mousewheel DOMMouseScroll").split(" ")
          , i = "jcf-mousewheel";
        r.event.special[i] = {
            setup: function() {
                var i = this;
                r.each(t, function(t, e) {
                    i.addEventListener ? i.addEventListener(e, s, !1) : i["on" + e] = s
                })
            },
            teardown: function() {
                var i = this;
                r.each(t, function(t, e) {
                    i.addEventListener ? i.removeEventListener(e, s, !1) : i["on" + e] = null
                })
            }
        };
        var s = function(t) {
            var e = t || window.event;
            if ((t = r.event.fix(e)).type = i,
            "detail"in e && (t.deltaY = -e.detail),
            "wheelDelta"in e && (t.deltaY = -e.wheelDelta),
            "wheelDeltaY"in e && (t.deltaY = -e.wheelDeltaY),
            "wheelDeltaX"in e && (t.deltaX = -e.wheelDeltaX),
            "deltaY"in e && (t.deltaY = e.deltaY),
            "deltaX"in e && (t.deltaX = e.deltaX),
            t.delta = t.deltaY || t.deltaX,
            1 === e.deltaMode) {
                t.delta *= 16,
                t.deltaY *= 16,
                t.deltaX *= 16
            }
            return (r.event.dispatch || r.event.handle).call(this, t)
        }
    }();
    var n = {
        fireNativeEvent: function(t, e) {
            r(t).each(function() {
                var t;
                this.dispatchEvent ? ((t = document.createEvent("HTMLEvents")).initEvent(e, !0, !0),
                this.dispatchEvent(t)) : document.createEventObject && ((t = document.createEventObject()).target = this).fireEvent("on" + e, t)
            })
        },
        bindHandlers: function() {
            var i = this;
            r.each(i, function(t, e) {
                0 === t.indexOf("on") && r.isFunction(e) && (i[t] = function() {
                    return e.apply(i, arguments)
                }
                )
            })
        }
    }
      , l = {
        version: "1.1.3",
        modules: {},
        getOptions: function() {
            return r.extend({}, a)
        },
        setOptions: function(t, e) {
            1 < arguments.length ? this.modules[t] && r.extend(this.modules[t].prototype.options, e) : r.extend(a, t)
        },
        addModule: function(t) {
            function e(t) {
                t.element.data(a.dataKey) || t.element.data(a.dataKey, this),
                o.push(this),
                this.options = r.extend({}, a, this.options, i(t.element), t),
                this.bindHandlers(),
                this.init.apply(this, arguments)
            }
            var i = function(t) {
                var e = t.data(a.optionsKey)
                  , i = t.attr(a.optionsKey);
                if (e)
                    return e;
                if (i)
                    try {
                        return r.parseJSON(i)
                    } catch (t) {}
            };
            e.prototype = t,
            r.extend(t, n),
            t.plugins && r.each(t.plugins, function(t, e) {
                r.extend(e.prototype, n)
            });
            var s = e.prototype.destroy;
            e.prototype.destroy = function() {
                this.options.element.removeData(this.options.dataKey);
                for (var t = o.length - 1; 0 <= t; t--)
                    if (o[t] === this) {
                        o.splice(t, 1);
                        break
                    }
                s && s.apply(this, arguments)
            }
            ,
            this.modules[t.name] = e
        },
        getInstance: function(t) {
            return r(t).data(a.dataKey)
        },
        replace: function(t, s, e) {
            var o, n = this;
            return a.styleSheetCreated || function() {
                function t(t, e, i) {
                    s.insertRule ? s.insertRule(t + "{" + e + "}", i) : s.addRule(t, e, i)
                }
                var e = r("<style>").appendTo("head")
                  , s = e.prop("sheet") || e.prop("styleSheet");
                t("." + a.hiddenClass, "position:absolute !important;left:-9999px !important;height:1px !important;width:1px !important;margin:0 !important;border-width:0 !important;-webkit-appearance:none;-moz-appearance:none;appearance:none"),
                t("." + a.rtlClass + " ." + a.hiddenClass, "right:-9999px !important; left: auto !important"),
                t("." + a.unselectableClass, "-webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; -webkit-tap-highlight-color: rgba(0,0,0,0);"),
                t("." + a.resetAppearanceClass, "background: none; border: none; -webkit-appearance: none; appearance: none; opacity: 0; filter: alpha(opacity=0);");
                var i = r("html")
                  , o = r("body");
                "rtl" !== i.css("direction") && "rtl" !== o.css("direction") || i.addClass(a.rtlClass),
                i.on("reset", function() {
                    setTimeout(function() {
                        l.refreshAll()
                    }, 0)
                }),
                a.styleSheetCreated = !0
            }(),
            r(t).each(function() {
                var t, i = r(this);
                (o = i.data(a.dataKey)) ? o.refresh() : (s || r.each(n.modules, function(t, e) {
                    if (e.prototype.matchElement.call(e.prototype, i))
                        return s = t,
                        !1
                }),
                s && (t = r.extend({
                    element: i
                }, e),
                o = new n.modules[s](t)))
            }),
            o
        },
        refresh: function(t) {
            r(t).each(function() {
                var t = r(this).data(a.dataKey);
                t && t.refresh()
            })
        },
        destroy: function(t) {
            r(t).each(function() {
                var t = r(this).data(a.dataKey);
                t && t.destroy()
            })
        },
        replaceAll: function(i) {
            var s = this;
            r.each(this.modules, function(t, e) {
                r(e.prototype.selector, i).each(function() {
                    this.className.indexOf("jcf-ignore") < 0 && s.replace(this, t)
                })
            })
        },
        refreshAll: function(i) {
            if (i)
                r.each(this.modules, function(t, e) {
                    r(e.prototype.selector, i).each(function() {
                        var t = r(this).data(a.dataKey);
                        t && t.refresh()
                    })
                });
            else
                for (var t = o.length - 1; 0 <= t; t--)
                    o[t].refresh()
        },
        destroyAll: function(i) {
            if (i)
                r.each(this.modules, function(t, e) {
                    r(e.prototype.selector, i).each(function(t, e) {
                        var i = r(e).data(a.dataKey);
                        i && i.destroy()
                    })
                });
            else
                for (; o.length; )
                    o[0].destroy()
        }
    };
    return window.jcf = l
}),
function(s) {
    "use strict";
    jcf.addModule({
        name: "Radio",
        selector: 'input[type="radio"]',
        options: {
            wrapNative: !0,
            checkedClass: "jcf-checked",
            uncheckedClass: "jcf-unchecked",
            labelActiveClass: "jcf-label-active",
            fakeStructure: '<span class="jcf-radio"><span></span></span>'
        },
        matchElement: function(t) {
            return t.is(":radio")
        },
        init: function() {
            this.initStructure(),
            this.attachEvents(),
            this.refresh()
        },
        initStructure: function() {
            this.doc = s(document),
            this.realElement = s(this.options.element),
            this.fakeElement = s(this.options.fakeStructure).insertAfter(this.realElement),
            this.labelElement = this.getLabelFor(),
            this.options.wrapNative ? this.realElement.prependTo(this.fakeElement).css({
                position: "absolute",
                opacity: 0
            }) : this.realElement.addClass(this.options.hiddenClass)
        },
        attachEvents: function() {
            this.realElement.on({
                focus: this.onFocus,
                click: this.onRealClick
            }),
            this.fakeElement.on("click", this.onFakeClick),
            this.fakeElement.on("jcf-pointerdown", this.onPress)
        },
        onRealClick: function(t) {
            var e = this;
            this.savedEventObject = t,
            setTimeout(function() {
                e.refreshRadioGroup()
            }, 0)
        },
        onFakeClick: function(t) {
            this.options.wrapNative && this.realElement.is(t.target) || this.realElement.is(":disabled") || (delete this.savedEventObject,
            this.currentActiveRadio = this.getCurrentActiveRadio(),
            this.stateChecked = this.realElement.prop("checked"),
            this.realElement.prop("checked", !0),
            this.fireNativeEvent(this.realElement, "click"),
            this.savedEventObject && this.savedEventObject.isDefaultPrevented() ? (this.realElement.prop("checked", this.stateChecked),
            this.currentActiveRadio.prop("checked", !0)) : this.fireNativeEvent(this.realElement, "change"),
            delete this.savedEventObject)
        },
        onFocus: function() {
            this.pressedFlag && this.focusedFlag || (this.focusedFlag = !0,
            this.fakeElement.addClass(this.options.focusClass),
            this.realElement.on("blur", this.onBlur))
        },
        onBlur: function() {
            this.pressedFlag || (this.focusedFlag = !1,
            this.fakeElement.removeClass(this.options.focusClass),
            this.realElement.off("blur", this.onBlur))
        },
        onPress: function(t) {
            this.focusedFlag || "mouse" !== t.pointerType || this.realElement.focus(),
            this.pressedFlag = !0,
            this.fakeElement.addClass(this.options.pressedClass),
            this.doc.on("jcf-pointerup", this.onRelease)
        },
        onRelease: function(t) {
            this.focusedFlag && "mouse" === t.pointerType && this.realElement.focus(),
            this.pressedFlag = !1,
            this.fakeElement.removeClass(this.options.pressedClass),
            this.doc.off("jcf-pointerup", this.onRelease)
        },
        getCurrentActiveRadio: function() {
            return this.getRadioGroup(this.realElement).filter(":checked")
        },
        getRadioGroup: function(t) {
            var e = t.attr("name")
              , i = t.parents("form");
            return e ? i.length ? i.find('input[name="' + e + '"]') : s('input[name="' + e + '"]:not(form input)') : t
        },
        getLabelFor: function() {
            var t = this.realElement.closest("label")
              , e = this.realElement.prop("id");
            return !t.length && e && (t = s('label[for="' + e + '"]')),
            t.length ? t : null
        },
        refreshRadioGroup: function() {
            this.getRadioGroup(this.realElement).each(function() {
                jcf.refresh(this)
            })
        },
        refresh: function() {
            var t = this.realElement.is(":checked")
              , e = this.realElement.is(":disabled");
            this.fakeElement.toggleClass(this.options.checkedClass, t).toggleClass(this.options.uncheckedClass, !t).toggleClass(this.options.disabledClass, e),
            this.labelElement && this.labelElement.toggleClass(this.options.labelActiveClass, t)
        },
        destroy: function() {
            this.options.wrapNative ? this.realElement.insertBefore(this.fakeElement).css({
                position: "",
                width: "",
                height: "",
                opacity: "",
                margin: ""
            }) : this.realElement.removeClass(this.options.hiddenClass),
            this.fakeElement.off("jcf-pointerdown", this.onPress),
            this.fakeElement.remove(),
            this.doc.off("jcf-pointerup", this.onRelease),
            this.realElement.off({
                blur: this.onBlur,
                focus: this.onFocus,
                click: this.onRealClick
            })
        }
    })
}(jQuery),
function(r, t) {
    "use strict";
    function e(t) {
        this.options = r.extend({
            wrapNative: !0,
            wrapNativeOnMobile: !0,
            fakeDropInBody: !0,
            useCustomScroll: !0,
            flipDropToFit: !0,
            maxVisibleItems: 10,
            fakeAreaStructure: '<span class="jcf-select"><span class="jcf-select-text"></span><span class="jcf-select-opener"></span></span>',
            fakeDropStructure: '<div class="jcf-select-drop"><div class="jcf-select-drop-content"></div></div>',
            optionClassPrefix: "jcf-option-",
            selectClassPrefix: "jcf-select-",
            dropContentSelector: ".jcf-select-drop-content",
            selectTextSelector: ".jcf-select-text",
            dropActiveClass: "jcf-drop-active",
            flipDropClass: "jcf-drop-flipped"
        }, t),
        this.init()
    }
    function i(t) {
        this.options = r.extend({
            wrapNative: !0,
            useCustomScroll: !0,
            fakeStructure: '<span class="jcf-list-box"><span class="jcf-list-wrapper"></span></span>',
            selectClassPrefix: "jcf-select-",
            listHolder: ".jcf-list-wrapper"
        }, t),
        this.init()
    }
    function s(t) {
        this.options = r.extend({
            holder: null,
            maxVisibleItems: 10,
            selectOnClick: !0,
            useHoverClass: !1,
            useCustomScroll: !1,
            handleResize: !0,
            multipleSelectWithoutKey: !1,
            alwaysPreventMouseWheel: !1,
            indexAttribute: "data-index",
            cloneClassPrefix: "jcf-option-",
            searchCountryInput: '<input type="text" class="country_sorting" id="country_sorting_textbox" placeholder="Search Country..." />',
            containerStructure: '<span class="jcf-list"><span class="jcf-list-content"></span></span>',
            containerSelector: ".jcf-list-content",
            captionClass: "jcf-optgroup-caption",
            disabledClass: "jcf-disabled",
            optionClass: "jcf-option",
            groupClass: "jcf-optgroup",
            hoverClass: "jcf-hover",
            selectedClass: "jcf-selected",
            scrollClass: "jcf-scroll-active"
        }, t),
        this.init()
    }
    jcf.addModule({
        name: "Select",
        selector: "select",
        options: {
            element: null,
            multipleCompactStyle: !1
        },
        plugins: {
            ListBox: i,
            ComboBox: e,
            SelectList: s
        },
        matchElement: function(t) {
            return t.is("select")
        },
        init: function() {
            this.element = r(this.options.element),
            this.createInstance()
        },
        isListBox: function() {
            return this.element.is("[size]:not([jcf-size]), [multiple]")
        },
        createInstance: function() {
            this.instance && this.instance.destroy(),
            this.isListBox() && !this.options.multipleCompactStyle ? this.instance = new i(this.options) : this.instance = new e(this.options)
        },
        refresh: function() {
            this.isListBox() && this.instance instanceof e || !this.isListBox() && this.instance instanceof i ? this.createInstance() : this.instance.refresh()
        },
        destroy: function() {
            this.instance.destroy()
        }
    }),
    r.extend(e.prototype, {
        init: function() {
            this.initStructure(),
            this.bindHandlers(),
            this.attachEvents(),
            this.refresh()
        },
        initStructure: function() {
            this.win = r(t),
            this.doc = r(document),
            this.realElement = r(this.options.element),
            this.fakeElement = r(this.options.fakeAreaStructure).insertAfter(this.realElement),
            this.selectTextContainer = this.fakeElement.find(this.options.selectTextSelector),
            this.selectText = r("<span></span>").appendTo(this.selectTextContainer),
            a(this.fakeElement),
            this.fakeElement.addClass(n(this.realElement.prop("className"), this.options.selectClassPrefix)),
            this.realElement.prop("multiple") && this.fakeElement.addClass("jcf-compact-multiple"),
            this.options.isMobileDevice && this.options.wrapNativeOnMobile && !this.options.wrapNative && (this.options.wrapNative = !0),
            this.options.wrapNative ? this.realElement.prependTo(this.fakeElement).css({
                position: "absolute",
                height: "100%",
                width: "100%"
            }).addClass(this.options.resetAppearanceClass) : (this.realElement.addClass(this.options.hiddenClass),
            this.fakeElement.attr("title", this.realElement.attr("title")),
            this.fakeDropTarget = this.options.fakeDropInBody ? r("body") : this.fakeElement)
        },
        attachEvents: function() {
            var t = this;
            this.delayedRefresh = function() {
                setTimeout(function() {
                    t.refresh(),
                    t.list && (t.list.refresh(),
                    t.list.scrollToActiveOption())
                }, 1)
            }
            ,
            this.options.wrapNative ? this.realElement.on({
                focus: this.onFocus,
                change: this.onChange,
                click: this.onChange,
                keydown: this.onChange
            }) : (this.realElement.on({
                focus: this.onFocus,
                change: this.onChange,
                keydown: this.onKeyDown
            }),
            this.fakeElement.on({
                "jcf-pointerdown": this.onSelectAreaPress
            }))
        },
        onKeyDown: function(t) {
            13 === t.which ? this.toggleDropdown() : this.dropActive && this.delayedRefresh()
        },
        onChange: function() {
            this.refresh()
        },
        onFocus: function() {
            this.pressedFlag && this.focusedFlag || (this.fakeElement.addClass(this.options.focusClass),
            this.realElement.on("blur", this.onBlur),
            this.toggleListMode(!0),
            this.focusedFlag = !0)
        },
        onBlur: function() {
            this.pressedFlag || (this.fakeElement.removeClass(this.options.focusClass),
            this.realElement.off("blur", this.onBlur),
            this.toggleListMode(!1),
            this.focusedFlag = !1)
        },
        onResize: function() {
            this.dropActive && this.hideDropdown()
        },
        onSelectDropPress: function() {
            this.pressedFlag = !0
        },
        onSelectDropRelease: function(t, e) {
            this.pressedFlag = !1,
            "mouse" === e.pointerType && this.realElement.focus()
        },
        onSelectAreaPress: function(t) {
            !this.options.fakeDropInBody && r(t.target).closest(this.dropdown).length || 1 < t.button || this.realElement.is(":disabled") || (this.selectOpenedByEvent = t.pointerType,
            this.toggleDropdown(),
            this.focusedFlag || ("mouse" === t.pointerType ? this.realElement.focus() : this.onFocus(t)),
            this.pressedFlag = !0,
            this.fakeElement.addClass(this.options.pressedClass),
            this.doc.on("jcf-pointerup", this.onSelectAreaRelease))
        },
        onSelectAreaRelease: function(t) {
            this.focusedFlag && "mouse" === t.pointerType && this.realElement.focus(),
            this.pressedFlag = !1,
            this.fakeElement.removeClass(this.options.pressedClass),
            this.doc.off("jcf-pointerup", this.onSelectAreaRelease)
        },
        onOutsideClick: function(t) {
            var e = r(t.target);
            e.closest(this.fakeElement).length || e.closest(this.dropdown).length || this.hideDropdown()
        },
        onSelect: function() {
            this.refresh(),
            this.realElement.prop("multiple") ? this.repositionDropdown() : this.hideDropdown(),
            this.fireNativeEvent(this.realElement, "change")
        },
        toggleListMode: function(t) {
            this.options.wrapNative || (t ? this.realElement.attr({
                size: 4,
                "jcf-size": ""
            }) : this.options.wrapNative || this.realElement.removeAttr("size jcf-size"))
        },
        createDropdown: function() {
            this.dropdown && (this.list.destroy(),
            this.dropdown.remove()),
            this.dropdown = r(this.options.fakeDropStructure).appendTo(this.fakeDropTarget),
            this.dropdown.addClass(n(this.realElement.prop("className"), this.options.selectClassPrefix)),
            a(this.dropdown),
            this.realElement.prop("multiple") && this.dropdown.addClass("jcf-compact-multiple"),
            this.options.fakeDropInBody && this.dropdown.css({
                position: "absolute",
                top: -9999
            }),
            this.list = new s({
                useHoverClass: !0,
                handleResize: !1,
                alwaysPreventMouseWheel: !0,
                maxVisibleItems: this.options.maxVisibleItems,
                useCustomScroll: this.options.useCustomScroll,
                holder: this.dropdown.find(this.options.dropContentSelector),
                multipleSelectWithoutKey: this.realElement.prop("multiple"),
                element: this.realElement
            }),
            r(this.list).on({
                select: this.onSelect,
                press: this.onSelectDropPress,
                release: this.onSelectDropRelease
            })
        },
        repositionDropdown: function() {
            var t, e, i, s = this.fakeElement.offset(), o = this.fakeElement.outerWidth(), n = this.fakeElement.outerHeight(), r = this.dropdown.css("width", o).outerHeight(), a = this.win.scrollTop(), l = this.win.height(), c = !1;
            s.top + n + r > a + l && s.top - r > a && (c = !0),
            this.options.fakeDropInBody && (i = "static" !== this.fakeDropTarget.css("position") ? this.fakeDropTarget.offset().top : 0,
            t = this.options.flipDropToFit && c ? (e = s.left,
            s.top - r - i) : (e = s.left,
            s.top + n - i),
            this.dropdown.css({
                width: o,
                left: e,
                top: t
            })),
            this.dropdown.add(this.fakeElement).toggleClass(this.options.flipDropClass, this.options.flipDropToFit && c)
        },
        showDropdown: function() {
            this.realElement.prop("options").length && (this.dropdown || this.createDropdown(),
            this.dropActive = !0,
            this.dropdown.appendTo(this.fakeDropTarget),
            this.fakeElement.addClass(this.options.dropActiveClass),
            this.refreshSelectedText(),
            this.repositionDropdown(),
            this.list.setScrollTop(this.savedScrollTop),
            this.list.refresh(),
            this.win.on("resize", this.onResize),
            this.doc.on("jcf-pointerdown", this.onOutsideClick),
            r(function() {
                r("#country_sorting_textbox").focus()
            }),
            r(".country_sorting").on("keyup", function(t) {
                t.preventDefault(),
                t.stopPropagation()
            }),
            r(".country_sorting").on("keydown", function(t) {
                var e = t.keyCode || t.which;
                if (13 === e)
                    t.preventDefault(),
                    t.stopPropagation();
                else if (40 === e)
                    t.preventDefault(),
                    t.stopPropagation(),
                    r(".jcf-list-content > ul >li:first").trigger("jcf-pointerover");
                else {
                    var s = r(this).val()
                      , o = 0;
                    r(".jcf-list-content > ul >li").each(function() {
                        var t = r(this).text().toLowerCase()
                          , e = r(this).text().toUpperCase()
                          , i = r(this).text();
                        0 == t.indexOf(s) || 0 == e.indexOf(s) || 0 == i.indexOf(s) ? (r(this).show(),
                        o += 1,
                        r(".no-search-result").remove()) : r(this).hide()
                    }),
                    0 == o && r(".jcf-list-content ul").append('<li class="no-search-result"><span class="jcf-option jcf-selected" data-index="0">No Search Result Found</span></li>')
                }
            }),
            r(".country_sorting").val(""),
            r(".jcf-list-content > ul >li").each(function() {
                r(this).show()
            }))
        },
        hideDropdown: function() {
            this.dropdown && (this.savedScrollTop = this.list.getScrollTop(),
            this.fakeElement.removeClass(this.options.dropActiveClass + " " + this.options.flipDropClass),
            this.dropdown.removeClass(this.options.flipDropClass).detach(),
            this.doc.off("jcf-pointerdown", this.onOutsideClick),
            this.win.off("resize", this.onResize),
            this.dropActive = !1,
            "touch" === this.selectOpenedByEvent && this.onBlur())
        },
        toggleDropdown: function() {
            this.dropActive ? this.hideDropdown() : this.showDropdown()
        },
        refreshSelectedText: function() {
            var t, e = this.realElement.prop("selectedIndex"), i = this.realElement.prop("options")[e], s = i ? i.getAttribute("data-image") : null, o = "";
            this.realElement.prop("multiple") ? (r.each(this.realElement.prop("options"), function(t, e) {
                e.selected && (o += (o ? ", " : "") + e.innerHTML)
            }),
            o = o || (this.realElement.attr("placeholder") || ""),
            this.selectText.removeAttr("class").html(o)) : i ? this.currentSelectedText === i.innerHTML && this.currentSelectedImage === s || (t = n(i.className, this.options.optionClassPrefix),
            this.selectText.attr("class", t).html(i.innerHTML),
            s ? (this.selectImage || (this.selectImage = r("<img>").prependTo(this.selectTextContainer).hide()),
            this.selectImage.attr("src", s).show()) : this.selectImage && this.selectImage.hide(),
            this.currentSelectedText = i.innerHTML,
            this.currentSelectedImage = s) : (this.selectImage && this.selectImage.hide(),
            this.selectText.removeAttr("class").empty())
        },
        refresh: function() {
            "none" === this.realElement.prop("style").display ? this.fakeElement.hide() : this.fakeElement.show(),
            this.refreshSelectedText(),
            this.fakeElement.toggleClass(this.options.disabledClass, this.realElement.is(":disabled"))
        },
        destroy: function() {
            this.options.wrapNative ? this.realElement.insertBefore(this.fakeElement).css({
                position: "",
                height: "",
                width: ""
            }).removeClass(this.options.resetAppearanceClass) : (this.realElement.removeClass(this.options.hiddenClass),
            this.realElement.is("[jcf-size]") && this.realElement.removeAttr("size jcf-size")),
            this.fakeElement.remove(),
            this.doc.off("jcf-pointerup", this.onSelectAreaRelease),
            this.realElement.off({
                focus: this.onFocus
            })
        }
    }),
    r.extend(i.prototype, {
        init: function() {
            this.bindHandlers(),
            this.initStructure(),
            this.attachEvents()
        },
        initStructure: function() {
            this.realElement = r(this.options.element),
            this.fakeElement = r(this.options.fakeStructure).insertAfter(this.realElement),
            this.listHolder = this.fakeElement.find(this.options.listHolder),
            a(this.fakeElement),
            this.fakeElement.addClass(n(this.realElement.prop("className"), this.options.selectClassPrefix)),
            this.realElement.addClass(this.options.hiddenClass),
            this.list = new s({
                useCustomScroll: this.options.useCustomScroll,
                holder: this.listHolder,
                selectOnClick: !1,
                element: this.realElement
            })
        },
        attachEvents: function() {
            var e = this;
            this.delayedRefresh = function(t) {
                t && 16 === t.which || (clearTimeout(e.refreshTimer),
                e.refreshTimer = setTimeout(function() {
                    e.refresh(),
                    e.list.scrollToActiveOption()
                }, 1))
            }
            ,
            this.realElement.on({
                focus: this.onFocus,
                click: this.delayedRefresh,
                keydown: this.delayedRefresh
            }),
            r(this.list).on({
                select: this.onSelect,
                press: this.onFakeOptionsPress,
                release: this.onFakeOptionsRelease
            })
        },
        onFakeOptionsPress: function(t, e) {
            this.pressedFlag = !0,
            "mouse" === e.pointerType && this.realElement.focus()
        },
        onFakeOptionsRelease: function(t, e) {
            this.pressedFlag = !1,
            "mouse" === e.pointerType && this.realElement.focus()
        },
        onSelect: function() {
            this.fireNativeEvent(this.realElement, "change"),
            this.fireNativeEvent(this.realElement, "click")
        },
        onFocus: function() {
            this.pressedFlag && this.focusedFlag || (this.fakeElement.addClass(this.options.focusClass),
            this.realElement.on("blur", this.onBlur),
            this.focusedFlag = !0)
        },
        onBlur: function() {
            this.pressedFlag || (this.fakeElement.removeClass(this.options.focusClass),
            this.realElement.off("blur", this.onBlur),
            this.focusedFlag = !1)
        },
        refresh: function() {
            this.fakeElement.toggleClass(this.options.disabledClass, this.realElement.is(":disabled")),
            this.list.refresh()
        },
        destroy: function() {
            this.list.destroy(),
            this.realElement.insertBefore(this.fakeElement).removeClass(this.options.hiddenClass),
            this.fakeElement.remove()
        }
    }),
    r.extend(s.prototype, {
        init: function() {
            this.initStructure(),
            this.refreshSelectedClass(),
            this.attachEvents()
        },
        initStructure: function() {
            this.element = r(this.options.element),
            this.indexSelector = "[" + this.options.indexAttribute + "]",
            0 < r(this.element).parents(".countries-form").length && (this.options.containerStructure = this.options.searchCountryInput + this.options.containerStructure),
            this.container = r(this.options.containerStructure).appendTo(this.options.holder),
            this.listHolder = this.container.find(this.options.containerSelector),
            this.lastClickedIndex = this.element.prop("selectedIndex"),
            this.rebuildList()
        },
        attachEvents: function() {
            this.bindHandlers(),
            this.listHolder.on("jcf-pointerdown", this.indexSelector, this.onItemPress),
            this.listHolder.on("jcf-pointerdown", this.onPress),
            this.options.useHoverClass && this.listHolder.on("jcf-pointerover", this.indexSelector, this.onHoverItem)
        },
        onPress: function(t) {
            r(this).trigger("press", t),
            this.listHolder.on("jcf-pointerup", this.onRelease)
        },
        onRelease: function(t) {
            r(this).trigger("release", t),
            this.listHolder.off("jcf-pointerup", this.onRelease)
        },
        onHoverItem: function(t) {
            var e = parseFloat(t.currentTarget.getAttribute(this.options.indexAttribute));
            this.fakeOptions.removeClass(this.options.hoverClass).eq(e).addClass(this.options.hoverClass)
        },
        onItemPress: function(t) {
            "touch" === t.pointerType || this.options.selectOnClick ? (this.tmpListOffsetTop = this.list.offset().top,
            this.listHolder.on("jcf-pointerup", this.indexSelector, this.onItemRelease)) : this.onSelectItem(t)
        },
        onItemRelease: function(t) {
            this.listHolder.off("jcf-pointerup", this.indexSelector, this.onItemRelease),
            this.tmpListOffsetTop === this.list.offset().top && this.listHolder.on("click", this.indexSelector, {
                savedPointerType: t.pointerType
            }, this.onSelectItem),
            delete this.tmpListOffsetTop
        },
        onSelectItem: function(t) {
            var i, e = parseFloat(t.currentTarget.getAttribute(this.options.indexAttribute)), s = t.data && t.data.savedPointerType || t.pointerType || "mouse";
            this.listHolder.off("click", this.indexSelector, this.onSelectItem),
            1 < t.button || this.realOptions[e].disabled || (this.element.prop("multiple") ? t.metaKey || t.ctrlKey || "touch" === s || this.options.multipleSelectWithoutKey ? this.realOptions[e].selected = !this.realOptions[e].selected : t.shiftKey ? (i = [this.lastClickedIndex, e].sort(function(t, e) {
                return t - e
            }),
            this.realOptions.each(function(t, e) {
                e.selected = t >= i[0] && t <= i[1]
            })) : this.element.prop("selectedIndex", e) : this.element.prop("selectedIndex", e),
            t.shiftKey || (this.lastClickedIndex = e),
            this.refreshSelectedClass(),
            "mouse" === s && this.scrollToActiveOption(),
            r(this).trigger("select"))
        },
        rebuildList: function() {
            var s = this
              , t = this.element[0];
            this.storedSelectHTML = t.innerHTML,
            this.optionIndex = 0,
            this.list = r(this.createOptionsList(t)),
            this.listHolder.empty().append(this.list),
            this.realOptions = this.element.find("option"),
            this.fakeOptions = this.list.find(this.indexSelector),
            this.fakeListItems = this.list.find("." + this.options.captionClass + "," + this.indexSelector),
            delete this.optionIndex;
            var e = this.options.maxVisibleItems
              , i = this.element.prop("size");
            1 < i && !this.element.is("[jcf-size]") && (e = i);
            var o = this.fakeOptions.length > e;
            this.container.toggleClass(this.options.scrollClass, o),
            o && (this.listHolder.css({
                maxHeight: this.getOverflowHeight(e),
                overflow: "auto"
            }),
            this.options.useCustomScroll && jcf.modules.Scrollable) ? jcf.replace(this.listHolder, "Scrollable", {
                handleResize: this.options.handleResize,
                alwaysPreventMouseWheel: this.options.alwaysPreventMouseWheel
            }) : this.options.alwaysPreventMouseWheel && (this.preventWheelHandler = function(t) {
                var e = s.listHolder.scrollTop()
                  , i = s.listHolder.prop("scrollHeight") - s.listHolder.innerHeight();
                (e <= 0 && t.deltaY < 0 || i <= e && 0 < t.deltaY) && t.preventDefault()
            }
            ,
            this.listHolder.on("jcf-mousewheel", this.preventWheelHandler))
        },
        refreshSelectedClass: function() {
            var t, i = this, e = this.element.prop("multiple"), s = this.element.prop("selectedIndex");
            e ? this.realOptions.each(function(t, e) {
                i.fakeOptions.eq(t).toggleClass(i.options.selectedClass, !!e.selected)
            }) : (this.fakeOptions.removeClass(this.options.selectedClass + " " + this.options.hoverClass),
            t = this.fakeOptions.eq(s).addClass(this.options.selectedClass),
            this.options.useHoverClass && t.addClass(this.options.hoverClass))
        },
        scrollToActiveOption: function() {
            var t = this.getActiveOptionOffset();
            "number" == typeof t && this.listHolder.prop("scrollTop", t)
        },
        getSelectedIndexRange: function() {
            var i = -1
              , s = -1;
            return this.realOptions.each(function(t, e) {
                e.selected && (i < 0 && (i = t),
                s = t)
            }),
            [i, s]
        },
        getChangedSelectedIndex: function() {
            var t, e = this.element.prop("selectedIndex");
            return this.element.prop("multiple") ? (this.previousRange || (this.previousRange = [e, e]),
            this.currentRange = this.getSelectedIndexRange(),
            t = this.currentRange[this.currentRange[0] !== this.previousRange[0] ? 0 : 1],
            this.previousRange = this.currentRange,
            t) : e
        },
        getActiveOptionOffset: function() {
            var t = this.listHolder.height()
              , e = this.listHolder.prop("scrollTop")
              , i = this.getChangedSelectedIndex()
              , s = this.fakeOptions.eq(i)
              , o = s.offset().top - this.list.offset().top
              , n = s.innerHeight();
            return e + t <= o + n ? o - t + n : o < e ? o : void 0
        },
        getOverflowHeight: function(t) {
            var e = this.fakeListItems.eq(t - 1)
              , i = this.list.offset().top;
            return e.offset().top + e.innerHeight() - i
        },
        getScrollTop: function() {
            return this.listHolder.scrollTop()
        },
        setScrollTop: function(t) {
            this.listHolder.scrollTop(t)
        },
        createOption: function(t) {
            var e = document.createElement("span");
            e.className = this.options.optionClass,
            e.innerHTML = t.innerHTML,
            e.setAttribute(this.options.indexAttribute, this.optionIndex++);
            var i, s = t.getAttribute("data-image");
            return s && ((i = document.createElement("img")).src = s,
            e.insertBefore(i, e.childNodes[0])),
            t.disabled && (e.className += " " + this.options.disabledClass),
            t.className && (e.className += " " + n(t.className, this.options.cloneClassPrefix)),
            e
        },
        createOptGroup: function(t) {
            var e, i, s = document.createElement("span"), o = t.getAttribute("label");
            return (e = document.createElement("span")).className = this.options.captionClass,
            e.innerHTML = o,
            s.appendChild(e),
            t.children.length && (i = this.createOptionsList(t),
            s.appendChild(i)),
            s.className = this.options.groupClass,
            s
        },
        createOptionContainer: function() {
            return document.createElement("li")
        },
        createOptionsList: function(t) {
            var o = this
              , n = document.createElement("ul");
            return r.each(t.children, function(t, e) {
                var i, s = o.createOptionContainer(e);
                switch (e.tagName.toLowerCase()) {
                case "option":
                    i = o.createOption(e);
                    break;
                case "optgroup":
                    i = o.createOptGroup(e)
                }
                n.appendChild(s).appendChild(i)
            }),
            n
        },
        refresh: function() {
            this.storedSelectHTML !== this.element.prop("innerHTML") && this.rebuildList();
            var t = jcf.getInstance(this.listHolder);
            t && t.refresh(),
            this.refreshSelectedClass()
        },
        destroy: function() {
            this.listHolder.off("jcf-mousewheel", this.preventWheelHandler),
            this.listHolder.off("jcf-pointerdown", this.indexSelector, this.onSelectItem),
            this.listHolder.off("jcf-pointerover", this.indexSelector, this.onHoverItem),
            this.listHolder.off("jcf-pointerdown", this.onPress)
        }
    });
    var o, n = function(t, e) {
        return t ? t.replace(/[\s]*([\S]+)+[\s]*/gi, e + "$1 ") : ""
    }, a = (o = jcf.getOptions().unselectableClass,
    function(t) {
        t.addClass(o).on("selectstart", l)
    }
    );
    function l(t) {
        t.preventDefault()
    }
}(jQuery, this),
function(l) {
    l.fn.sameHeight = function(t) {
        var r = l.extend({
            skipClass: "same-height-ignore",
            leftEdgeClass: "same-height-left",
            rightEdgeClass: "same-height-right",
            elements: ">*",
            flexible: !1,
            multiLine: !1,
            useMinHeight: !1,
            biggestHeight: !1
        }, t);
        return this.each(function() {
            var t, e, i = l(this), s = i.find(r.elements).not("." + r.skipClass);
            if (s.length) {
                n();
                function o() {
                    e || (e = !0,
                    n(),
                    clearTimeout(t),
                    t = setTimeout(function() {
                        n(),
                        setTimeout(function() {
                            e = !1
                        }, 10)
                    }, 100))
                }
                r.flexible && l(window).bind("resize orientationchange fontresize", o),
                l(window).bind("load", o)
            }
            function n() {
                s.css(r.useMinHeight && c ? "minHeight" : "height", ""),
                r.multiLine ? function(t, i) {
                    var s, o = l(), n = 0, r = t.eq(0).offset().top;
                    t.each(function(t) {
                        var e = l(this);
                        e.offset().top === r ? o = o.add(this) : (s = a(o),
                        n = Math.max(n, d(o, s, i)),
                        r = (o = e).offset().top)
                    }),
                    o.length && (s = a(o),
                    n = Math.max(n, d(o, s, i)));
                    i.biggestHeight && t.css(i.useMinHeight && c ? "minHeight" : "height", n)
                }(s, r) : d(s, i, r)
            }
        })
    }
    ;
    var c = void 0 !== document.documentElement.style.maxHeight;
    function a(t) {
        var e = 0;
        return t.each(function() {
            e = Math.max(e, l(this).outerHeight())
        }),
        e
    }
    function d(t, o, n) {
        var r, a = "number" == typeof o ? o : o.height();
        return t.removeClass(n.leftEdgeClass).removeClass(n.rightEdgeClass).each(function(t) {
            var e = l(this)
              , i = 0
              , s = "border-box" === e.css("boxSizing") || "border-box" === e.css("-moz-box-sizing") || "border-box" === e.css("-webkit-box-sizing");
            "number" != typeof o && e.parents().each(function() {
                var t = l(this);
                if (o.is(this))
                    return !1;
                i += t.outerHeight() - t.height()
            }),
            r = a - i,
            0 < (r -= s ? 0 : e.outerHeight() - e.height()) && e.css(n.useMinHeight && c ? "minHeight" : "height", r)
        }),
        t.filter(":first").addClass(n.leftEdgeClass),
        t.filter(":last").addClass(n.rightEdgeClass),
        r
    }
}(jQuery),
function(r, e) {
    "use strict";
    function a(t, e) {
        this.options = e,
        this.$stickyBox = t,
        this.init()
    }
    var l = {
        init: function() {
            this.findElements(),
            this.attachEvents(),
            this.makeCallback("onInit")
        },
        findElements: function() {
            this.$container = this.$stickyBox.closest(this.options.container),
            this.isWrap = "fixed" === this.options.positionType && this.options.setBoxHeight,
            this.moveInContainer = !!this.$container.length,
            this.isWrap && (this.$stickyBoxWrap = this.$stickyBox.wrap('<div class="' + this.getWrapClass() + '"/>').parent()),
            this.parentForActive = this.getParentForActive(),
            this.isInit = !0
        },
        attachEvents: function() {
            var t = this;
            this.onResize = function() {
                t.isInit && (t.resetState(),
                t.recalculateOffsets(),
                t.checkStickyPermission(),
                t.scrollHandler())
            }
            ,
            this.onScroll = function() {
                t.scrollHandler()
            }
            ,
            this.onResize(),
            e.on("load resize orientationchange", this.onResize).on("scroll", this.onScroll)
        },
        defineExtraTop: function() {
            var t;
            "number" == typeof this.options.extraTop ? t = this.options.extraTop : "function" == typeof this.options.extraTop && (t = this.options.extraTop()),
            this.extraTop = "absolute" === this.options.positionType ? t : Math.min(this.winParams.height - this.data.boxFullHeight, t)
        },
        checkStickyPermission: function() {
            this.isStickyEnabled = !this.moveInContainer || this.data.containerOffsetTop + this.data.containerHeight > this.data.boxFullHeight + this.data.boxOffsetTop + this.options.extraBottom
        },
        getParentForActive: function() {
            return this.isWrap ? this.$stickyBoxWrap : this.$container.length ? this.$container : this.$stickyBox
        },
        getWrapClass: function() {
            try {
                return this.$stickyBox.attr("class").split(" ").map(function(t) {
                    return "sticky-wrap-" + t
                }).join(" ")
            } catch (t) {
                return "sticky-wrap"
            }
        },
        resetState: function() {
            this.stickyFlag = !1,
            this.$stickyBox.css({
                "-webkit-transition": "",
                "-webkit-transform": "",
                transition: "",
                transform: "",
                position: "",
                width: "",
                left: "",
                top: ""
            }).removeClass(this.options.activeClass),
            this.isWrap && this.$stickyBoxWrap.removeClass(this.options.activeClass).removeAttr("style"),
            this.moveInContainer && this.$container.removeClass(this.options.activeClass)
        },
        recalculateOffsets: function() {
            this.winParams = this.getWindowParams(),
            this.data = r.extend(this.getBoxOffsets(), this.getContainerOffsets()),
            this.defineExtraTop()
        },
        getBoxOffsets: function() {
            var t, e = "fixed" === this.$stickyBox.css("position") ? ((t = this.$stickyBox.offset()).top = 0,
            t) : this.$stickyBox.offset(), i = this.$stickyBox.position();
            return {
                boxOffsetLeft: e.left,
                boxOffsetTop: e.top,
                boxTopPosition: i.top,
                boxLeftPosition: i.left,
                boxFullHeight: this.$stickyBox.outerHeight(!0),
                boxHeight: this.$stickyBox.outerHeight(),
                boxWidth: this.$stickyBox.outerWidth()
            }
        },
        getContainerOffsets: function() {
            var t = this.moveInContainer ? this.$container.offset() : null;
            return t ? {
                containerOffsetLeft: t.left,
                containerOffsetTop: t.top,
                containerHeight: this.$container.outerHeight()
            } : {}
        },
        getWindowParams: function() {
            return {
                height: window.innerHeight || document.documentElement.clientHeight
            }
        },
        makeCallback: function(t) {
            if ("function" == typeof this.options[t]) {
                var e = Array.prototype.slice.call(arguments);
                e.shift(),
                this.options[t].apply(this, e)
            }
        },
        destroy: function() {
            this.isInit = !1,
            e.off("load resize orientationchange", this.onResize).off("scroll", this.onScroll),
            this.resetState(),
            this.$stickyBox.removeData("StickyScrollBlock"),
            this.isWrap && this.$stickyBox.unwrap(),
            this.makeCallback("onDestroy")
        }
    }
      , c = {
        fixed: {
            scrollHandler: function() {
                this.winScrollTop = e.scrollTop(),
                this.winScrollTop - (this.options.showAfterScrolled ? this.extraTop : 0) - (this.options.showAfterScrolled ? this.data.boxHeight + this.extraTop : 0) > this.data.boxOffsetTop - this.extraTop ? this.isStickyEnabled && this.stickyOn() : this.stickyOff()
            },
            stickyOn: function() {
                this.stickyFlag || (this.stickyFlag = !0,
                this.parentForActive.addClass(this.options.activeClass),
                this.$stickyBox.css({
                    width: this.data.boxWidth,
                    position: this.options.positionType
                }),
                this.isWrap && this.$stickyBoxWrap.css({
                    height: this.data.boxFullHeight
                }),
                this.makeCallback("fixedOn")),
                this.setDynamicPosition()
            },
            stickyOff: function() {
                this.stickyFlag && (this.stickyFlag = !1,
                this.resetState(),
                this.makeCallback("fixedOff"))
            },
            setDynamicPosition: function() {
                this.$stickyBox.css({
                    top: this.getTopPosition(),
                    left: this.data.boxOffsetLeft - e.scrollLeft()
                })
            },
            getTopPosition: function() {
                if (this.moveInContainer) {
                    var t = this.winScrollTop + this.data.boxHeight + this.options.extraBottom;
                    return Math.min(this.extraTop, this.data.containerHeight + this.data.containerOffsetTop - t)
                }
                return this.extraTop
            }
        },
        absolute: {
            scrollHandler: function() {
                this.winScrollTop = e.scrollTop(),
                this.winScrollTop > this.data.boxOffsetTop - this.extraTop ? this.isStickyEnabled && this.stickyOn() : this.stickyOff()
            },
            stickyOn: function() {
                this.stickyFlag || (this.stickyFlag = !0,
                this.parentForActive.addClass(this.options.activeClass),
                this.$stickyBox.css({
                    width: this.data.boxWidth,
                    transition: "transform " + this.options.animSpeed + "s ease",
                    "-webkit-transition": "transform " + this.options.animSpeed + "s ease"
                }),
                this.isWrap && this.$stickyBoxWrap.css({
                    height: this.data.boxFullHeight
                }),
                this.makeCallback("fixedOn")),
                this.clearTimer(),
                this.timer = setTimeout(function() {
                    this.setDynamicPosition()
                }
                .bind(this), 1e3 * this.options.animDelay)
            },
            stickyOff: function() {
                this.stickyFlag && (this.clearTimer(),
                this.stickyFlag = !1,
                this.timer = setTimeout(function() {
                    this.setDynamicPosition(),
                    setTimeout(function() {
                        this.resetState()
                    }
                    .bind(this), 1e3 * this.options.animSpeed)
                }
                .bind(this), 1e3 * this.options.animDelay),
                this.makeCallback("fixedOff"))
            },
            clearTimer: function() {
                clearTimeout(this.timer)
            },
            setDynamicPosition: function() {
                var t = Math.max(0, this.getTopPosition());
                this.$stickyBox.css({
                    transform: "translateY(" + t + "px)",
                    "-webkit-transform": "translateY(" + t + "px)"
                })
            },
            getTopPosition: function() {
                var t = this.winScrollTop - this.data.boxOffsetTop + this.extraTop;
                if (this.moveInContainer) {
                    var e = this.winScrollTop + this.data.boxHeight + this.options.extraBottom;
                    return t - Math.abs(Math.min(0, this.data.containerHeight + this.data.containerOffsetTop - e - this.extraTop))
                }
                return t
            }
        }
    };
    r.fn.stickyScrollBlock = function(i) {
        var s = Array.prototype.slice.call(arguments)
          , o = s[0]
          , n = r.extend({
            container: null,
            positionType: "fixed",
            activeClass: "fixed-position",
            setBoxHeight: !0,
            showAfterScrolled: !1,
            extraTop: 0,
            extraBottom: 0,
            animDelay: .1,
            animSpeed: .2
        }, i);
        return this.each(function() {
            var t = jQuery(this)
              , e = t.data("StickyScrollBlock");
            "object" == typeof i || void 0 === i ? (a.prototype = r.extend(c[n.positionType], l),
            t.data("StickyScrollBlock", new a(t,n))) : "string" == typeof o && e && "function" == typeof e[o] && (s.shift(),
            e[o].apply(e, s))
        })
    }
    ,
    window.StickyScrollBlock = a
}(jQuery, jQuery(window)),
window.ResponsiveHelper = function(s) {
    var o, e = [], i = s(window), n = !1;
    function r() {
        var t = i.width();
        t !== o && (o = t,
        s.each(e, function(t, e) {
            s.each(e.data, function(t, e) {
                e.currentActive && !a(e.range[0], e.range[1]) && (e.currentActive = !1,
                "function" == typeof e.disableCallback && e.disableCallback())
            }),
            s.each(e.data, function(t, e) {
                !e.currentActive && a(e.range[0], e.range[1]) && (e.currentActive = !0,
                "function" == typeof e.enableCallback && e.enableCallback())
            })
        }))
    }
    function a(t, e) {
        var i = "";
        return 0 < t && (i += "(min-width: " + t + "px)"),
        e < 1 / 0 && (i += (i ? " and " : "") + "(max-width: " + e + "px)"),
        function(t, e, i) {
            return window.matchMedia && n ? matchMedia(t).matches : window.styleMedia ? styleMedia.matchMedium(t) : window.media ? media.matchMedium(t) : e <= o && o <= i
        }(i, t, e)
    }
    return window.matchMedia && (window.Window && window.matchMedia === Window.prototype.matchMedia ? n = !0 : -1 < window.matchMedia.toString().indexOf("native") && (n = !0)),
    i.bind("load resize orientationchange", r),
    {
        addRange: function(t) {
            var i = {
                data: {}
            };
            s.each(t, function(t, e) {
                i.data[t] = {
                    range: function(t) {
                        var e = t.split("..");
                        return [parseInt(e[0], 10) || -1 / 0, parseInt(e[1], 10) || 1 / 0].sort(function(t, e) {
                            return t - e
                        })
                    }(t),
                    enableCallback: e.on,
                    disableCallback: e.off
                }
            }),
            e.push(i),
            o = null,
            r()
        }
    }
}(jQuery),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : t.SlideAccordion = e(jQuery)
}(this, function(o) {
    "use strict";
    var t, e, i = "js-acc-hidden";
    function n(t) {
        this.options = o.extend(!0, {
            allowClickWhenExpanded: !1,
            activeClass: "active",
            opener: ".opener",
            slider: ".slide",
            animSpeed: 300,
            collapsible: !0,
            event: "click",
            scrollToActiveItem: {
                enable: !1,
                breakpoint: 767,
                animSpeed: 600,
                extraOffset: null
            }
        }, t),
        this.init()
    }
    return n.prototype = {
        init: function() {
            this.options.holder && (this.findElements(),
            this.setStateOnInit(),
            this.attachEvents(),
            this.makeCallback("onInit"))
        },
        findElements: function() {
            this.$holder = o(this.options.holder).data("SlideAccordion", this),
            this.$items = this.$holder.find(":has(" + this.options.slider + ")")
        },
        setStateOnInit: function() {
            var t = this;
            this.$items.each(function() {
                o(this).hasClass(t.options.activeClass) || o(this).find(t.options.slider).addClass(i)
            })
        },
        attachEvents: function() {
            var s = this;
            this.accordionToggle = function(t) {
                var e = jQuery(this).closest(s.$items)
                  , i = s.getActiveItem(e);
                s.options.allowClickWhenExpanded && e.hasClass(s.options.activeClass) || (t.preventDefault(),
                s.toggle(e, i))
            }
            ,
            this.$items.on(this.options.event, this.options.opener, this.accordionToggle)
        },
        toggle: function(t, e) {
            t.hasClass(this.options.activeClass) ? this.options.collapsible && this.hide(t) : this.show(t),
            !t.is(e) && e.length && this.hide(e),
            this.makeCallback("beforeToggle")
        },
        show: function(t) {
            var e = t.find(this.options.slider);
            t.addClass(this.options.activeClass),
            e.stop().hide().removeClass(i).slideDown({
                duration: this.options.animSpeed,
                complete: function() {
                    e.removeAttr("style"),
                    this.options.scrollToActiveItem.enable && window.innerWidth <= this.options.scrollToActiveItem.breakpoint && setTimeout(function() {
                        this.goToItem(t)
                    }
                    .bind(this), 100),
                    this.makeCallback("onShow", t)
                }
                .bind(this)
            }),
            this.makeCallback("beforeShow", t)
        },
        hide: function(t) {
            var e = t.find(this.options.slider);
            t.removeClass(this.options.activeClass),
            e.stop().show().slideUp({
                duration: this.options.animSpeed,
                complete: function() {
                    e.addClass(i),
                    e.removeAttr("style"),
                    this.makeCallback("onHide", t)
                }
                .bind(this)
            }),
            this.makeCallback("beforeHide", t)
        },
        goToItem: function(t) {
            var e = t.offset().top;
            e < o(window).scrollTop() && ("number" == typeof this.options.scrollToActiveItem.extraOffset ? e -= this.options.scrollToActiveItem.extraOffset : "function" == typeof this.options.scrollToActiveItem.extraOffset && (e -= this.options.scrollToActiveItem.extraOffset()),
            o("body, html").animate({
                scrollTop: e
            }, this.options.scrollToActiveItem.animSpeed))
        },
        getActiveItem: function(t) {
            return t.siblings().filter("." + this.options.activeClass)
        },
        makeCallback: function(t) {
            if ("function" == typeof this.options[t]) {
                var e = Array.prototype.slice.call(arguments);
                e.shift(),
                this.options[t].apply(this, e)
            }
        },
        destroy: function() {
            this.$holder.removeData("SlideAccordion"),
            this.$items.off(this.options.event, this.options.opener, this.accordionToggle),
            this.$items.removeClass(this.options.activeClass).each(function(t, e) {
                o(e).find(this.options.slider).removeAttr("style").removeClass(i)
            }
            .bind(this)),
            this.makeCallback("onDestroy")
        }
    },
    o.fn.slideAccordion = function(e) {
        var i = Array.prototype.slice.call(arguments)
          , s = i[0];
        return this.each(function() {
            var t = jQuery(this).data("SlideAccordion");
            "object" == typeof e || void 0 === e ? new n(o.extend(!0, {
                holder: this
            }, e)) : "string" == typeof s && t && "function" == typeof t[s] && (i.shift(),
            t[s].apply(t, i))
        })
    }
    ,
    t = o('<style type="text/css">')[0],
    e = "." + i,
    e += "{position:absolute !important;left:-9999px !important;top:-9999px !important;display:block !important; width: 100% !important;}",
    t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)),
    o("head").append(t),
    n
}),
function(c, t) {
    var o, n, r, d = c(window), a = "onwheel"in document || 9 <= document.documentMode ? "wheel" : "mousewheel DOMMouseScroll";
    function s(t, e, i) {
        var s;
        document.body && (e = "number" == typeof e ? {
            duration: e
        } : e || {},
        o = o || c("html, body"),
        s = e.container || o,
        "number" == typeof t && (t = {
            top: t
        }),
        n && r && n.off(a, r),
        e.wheelBehavior && "none" !== e.wheelBehavior && (r = function(t) {
            "stop" === e.wheelBehavior ? (s.off(a, r),
            s.stop()) : "ignore" === e.wheelBehavior && t.preventDefault()
        }
        ,
        n = s.on(a, r)),
        s.stop().animate({
            scrollLeft: t.left,
            scrollTop: t.top
        }, e.duration, function() {
            r && s.off(a, r),
            c.isFunction(i) && i()
        }))
    }
    function e(t) {
        this.options = c.extend({
            anchorLinks: 'a[href^="#"]',
            container: null,
            extraOffset: null,
            activeClasses: null,
            easing: "swing",
            animMode: "duration",
            animDuration: 800,
            animSpeed: 1500,
            anchorActiveClass: "anchor-active",
            sectionActiveClass: "section-active",
            wheelBehavior: "stop",
            useNativeAnchorScrolling: !1
        }, t),
        this.init()
    }
    e.prototype = {
        init: function() {
            this.initStructure(),
            this.attachEvents(),
            this.isInit = !0
        },
        initStructure: function() {
            var t = this;
            this.container = this.options.container ? c(this.options.container) : c("html,body"),
            this.scrollContainer = this.options.container ? this.container : d,
            this.anchorLinks = jQuery(this.options.anchorLinks).filter(function() {
                return jQuery(t.getAnchorTarget(jQuery(this))).length
            })
        },
        getId: function(t) {
            try {
                return "#" + t.replace(/^.*?(#|$)/, "")
            } catch (t) {
                return null
            }
        },
        getAnchorTarget: function(t) {
            var e = this.getId(c(t).attr("href"));
            return c(1 < e.length ? e : "html")
        },
        getTargetOffset: function(t) {
            var e = t.offset().top;
            return this.options.container && (e -= this.container.offset().top - this.container.prop("scrollTop")),
            "number" == typeof this.options.extraOffset ? e -= this.options.extraOffset : "function" == typeof this.options.extraOffset && (e -= this.options.extraOffset(t)),
            {
                top: e
            }
        },
        attachEvents: function() {
            var e = this;
            if (this.options.activeClasses && this.anchorLinks.length) {
                this.anchorData = [];
                for (var t = 0; t < this.anchorLinks.length; t++) {
                    var i = jQuery(this.anchorLinks[t])
                      , s = e.getAnchorTarget(i)
                      , o = null;
                    c.each(e.anchorData, function(t, e) {
                        e.block[0] === s[0] && (o = e)
                    }),
                    o ? o.link = o.link.add(i) : e.anchorData.push({
                        link: i,
                        block: s
                    })
                }
                this.resizeHandler = function() {
                    e.isInit && e.recalculateOffsets()
                }
                ,
                this.scrollHandler = function() {
                    e.refreshActiveClass()
                }
                ,
                this.recalculateOffsets(),
                this.scrollContainer.on("scroll", this.scrollHandler),
                d.on("resize load orientationchange refreshAnchor", this.resizeHandler)
            }
            this.clickHandler = function(t) {
                e.onClick(t)
            }
            ,
            this.options.useNativeAnchorScrolling || this.anchorLinks.on("click", this.clickHandler)
        },
        recalculateOffsets: function() {
            var i = this;
            c.each(this.anchorData, function(t, e) {
                e.offset = i.getTargetOffset(e.block),
                e.height = e.block.outerHeight()
            }),
            this.refreshActiveClass()
        },
        toggleActiveClass: function(t, e, i) {
            t.toggleClass(this.options.anchorActiveClass, i),
            e.toggleClass(this.options.sectionActiveClass, i)
        },
        refreshActiveClass: function() {
            var o = this
              , n = !1
              , r = this.container.prop("scrollHeight")
              , a = this.scrollContainer.height()
              , l = this.options.container ? this.container.prop("scrollTop") : d.scrollTop();
            this.options.customScrollHandler ? this.options.customScrollHandler.call(this, l, this.anchorData) : (this.anchorData.sort(function(t, e) {
                return t.offset.top - e.offset.top
            }),
            c.each(this.anchorData, function(t) {
                var e = o.anchorData.length - t - 1
                  , i = o.anchorData[e]
                  , s = "parent" === o.options.activeClasses ? i.link.parent() : i.link;
                r - a <= l ? e == o.anchorData.length - 1 ? o.toggleActiveClass(s, i.block, !0) : o.toggleActiveClass(s, i.block, !1) : !n && (l >= i.offset.top - 1 || 0 == e) ? (n = !0,
                o.toggleActiveClass(s, i.block, !0)) : o.toggleActiveClass(s, i.block, !1)
            }))
        },
        calculateScrollDuration: function(t) {
            return "speed" === this.options.animMode ? Math.abs(this.scrollContainer.scrollTop() - t.top) / this.options.animSpeed * 1e3 : this.options.animDuration
        },
        onClick: function(t) {
            var e = this.getAnchorTarget(t.currentTarget)
              , i = this.getTargetOffset(e);
            t.preventDefault(),
            s(i, {
                container: this.container,
                wheelBehavior: this.options.wheelBehavior,
                duration: this.calculateScrollDuration(i)
            }),
            this.makeCallback("onBeforeScroll", t.currentTarget)
        },
        makeCallback: function(t) {
            if ("function" == typeof this.options[t]) {
                var e = Array.prototype.slice.call(arguments);
                e.shift(),
                this.options[t].apply(this, e)
            }
        },
        destroy: function() {
            var o = this;
            this.isInit = !1,
            this.options.activeClasses && (d.off("resize load orientationchange refreshAnchor", this.resizeHandler),
            this.scrollContainer.off("scroll", this.scrollHandler),
            c.each(this.anchorData, function(t) {
                var e = o.anchorData.length - t - 1
                  , i = o.anchorData[e]
                  , s = "parent" === o.options.activeClasses ? i.link.parent() : i.link;
                o.toggleActiveClass(s, i.block, !1)
            })),
            this.anchorLinks.off("click", this.clickHandler)
        }
    },
    c.extend(e, {
        scrollTo: function(t, e, i) {
            s(t, e, i)
        }
    }),
    t.SmoothScroll = e
}(jQuery, this),
function(n) {
    "use strict";
    var t = /Windows Phone/.test(navigator.userAgent) || "ontouchstart"in window || window.DocumentTouch && document instanceof DocumentTouch;
    function r(t) {
        this.options = n.extend({
            slides: "ul.slideset > li",
            activeClass: "active",
            disabledClass: "disabled",
            btnPrev: "a.btn-prev",
            btnNext: "a.btn-next",
            generatePagination: !1,
            pagerList: "<ul>",
            pagerListItem: '<li><a href="#"></a></li>',
            pagerListItemText: "a",
            pagerLinks: ".pagination li",
            currentNumber: "span.current-num",
            totalNumber: "span.total-num",
            btnPlay: ".btn-play",
            btnPause: ".btn-pause",
            btnPlayPause: ".btn-play-pause",
            galleryReadyClass: "gallery-js-ready",
            autorotationActiveClass: "autorotation-active",
            autorotationDisabledClass: "autorotation-disabled",
            autorotationStopAfterClick: !1,
            circularRotation: !0,
            switchSimultaneously: !0,
            disableWhileAnimating: !1,
            disableFadeIE: !1,
            autoRotation: !1,
            pauseOnHover: !0,
            autoHeight: !0,
            useSwipe: !0,
            swipeThreshold: 15,
            switchTime: 4e3,
            animSpeed: 600,
            event: "click"
        }, t),
        this.init()
    }
    r.prototype = {
        init: function() {
            this.options.holder && (this.findElements(),
            this.attachEvents(),
            this.refreshState(!0),
            this.autoRotate(),
            this.makeCallback("onInit", this))
        },
        findElements: function() {
            if (this.gallery = n(this.options.holder).addClass(this.options.galleryReadyClass),
            this.slides = this.gallery.find(this.options.slides),
            this.slidesHolder = this.slides.eq(0).parent(),
            this.stepsCount = this.slides.length,
            this.btnPrev = this.gallery.find(this.options.btnPrev),
            this.btnNext = this.gallery.find(this.options.btnNext),
            this.currentIndex = 0,
            this.options.disableFadeIE && !n.support.opacity && (this.options.animSpeed = 0),
            "string" == typeof this.options.generatePagination) {
                this.pagerHolder = this.gallery.find(this.options.generatePagination).empty(),
                this.pagerList = n(this.options.pagerList).appendTo(this.pagerHolder);
                for (var t = 0; t < this.stepsCount; t++)
                    n(this.options.pagerListItem).appendTo(this.pagerList).find(this.options.pagerListItemText).text(t + 1);
                this.pagerLinks = this.pagerList.children()
            } else
                this.pagerLinks = this.gallery.find(this.options.pagerLinks);
            var e = this.slides.filter("." + this.options.activeClass);
            e.length && (this.currentIndex = this.slides.index(e)),
            this.prevIndex = this.currentIndex,
            this.btnPlay = this.gallery.find(this.options.btnPlay),
            this.btnPause = this.gallery.find(this.options.btnPause),
            this.btnPlayPause = this.gallery.find(this.options.btnPlayPause),
            this.curNum = this.gallery.find(this.options.currentNumber),
            this.allNum = this.gallery.find(this.options.totalNumber),
            this.slides.css({
                display: "block",
                opacity: 0
            }).eq(this.currentIndex).css({
                opacity: ""
            }),
            this.isInit = !0
        },
        attachEvents: function() {
            var e = this;
            this.resizeHandler = function() {
                e.isInit && e.onWindowResize()
            }
            ,
            n(window).bind("load resize orientationchange", this.resizeHandler),
            this.btnPrev.length && (this.btnPrevHandler = function(t) {
                t.preventDefault(),
                e.prevSlide(),
                e.options.autorotationStopAfterClick && e.stopRotation()
            }
            ,
            this.btnPrev.bind(this.options.event, this.btnPrevHandler)),
            this.btnNext.length && (this.btnNextHandler = function(t) {
                t.preventDefault(),
                e.nextSlide(),
                e.options.autorotationStopAfterClick && e.stopRotation()
            }
            ,
            this.btnNext.bind(this.options.event, this.btnNextHandler)),
            this.pagerLinks.length && (this.pagerLinksHandler = function(t) {
                t.preventDefault(),
                e.numSlide(e.pagerLinks.index(t.currentTarget)),
                e.options.autorotationStopAfterClick && e.stopRotation()
            }
            ,
            this.pagerLinks.bind(e.options.event, this.pagerLinksHandler)),
            this.btnPlay.length && (this.btnPlayHandler = function(t) {
                t.preventDefault(),
                e.startRotation()
            }
            ,
            this.btnPlay.bind(this.options.event, this.btnPlayHandler)),
            this.btnPause.length && (this.btnPauseHandler = function(t) {
                t.preventDefault(),
                e.stopRotation()
            }
            ,
            this.btnPause.bind(this.options.event, this.btnPauseHandler)),
            this.btnPlayPause.length && (this.btnPlayPauseHandler = function(t) {
                t.preventDefault(),
                e.gallery.hasClass(e.options.autorotationActiveClass) ? e.stopRotation() : e.startRotation()
            }
            ,
            this.btnPlayPause.bind(this.options.event, this.btnPlayPauseHandler)),
            this.options.useSwipe && window.Hammer && t && (this.swipeHandler = new Hammer.Manager(this.gallery[0]),
            this.swipeHandler.add(new Hammer.Swipe({
                direction: Hammer.DIRECTION_HORIZONTAL,
                threshold: e.options.swipeThreshold
            })),
            this.swipeHandler.on("swipeleft", function() {
                e.nextSlide()
            }).on("swiperight", function() {
                e.prevSlide()
            })),
            this.options.pauseOnHover && (this.hoverHandler = function() {
                e.options.autoRotation && (e.galleryHover = !0,
                e.pauseRotation())
            }
            ,
            this.leaveHandler = function() {
                e.options.autoRotation && (e.galleryHover = !1,
                e.resumeRotation())
            }
            ,
            this.gallery.bind({
                mouseenter: this.hoverHandler,
                mouseleave: this.leaveHandler
            }))
        },
        onWindowResize: function() {
            this.options.autoHeight && (this.options.initialHeight = n(".slide").eq(0).outerHeight(!0),
            this.slidesHolder.css({
                height: this.options.initialHeight
            }))
        },
        prevSlide: function() {
            this.options.disableWhileAnimating && this.galleryAnimating || (this.prevIndex = this.currentIndex,
            0 < this.currentIndex ? (this.currentIndex--,
            this.switchSlide()) : this.options.circularRotation && (this.currentIndex = this.stepsCount - 1,
            this.switchSlide()))
        },
        nextSlide: function(t) {
            this.options.disableWhileAnimating && this.galleryAnimating || (this.prevIndex = this.currentIndex,
            this.currentIndex < this.stepsCount - 1 ? (this.currentIndex++,
            this.switchSlide()) : !this.options.circularRotation && !0 !== t || (this.currentIndex = 0,
            this.switchSlide()))
        },
        numSlide: function(t) {
            this.currentIndex != t && (this.prevIndex = this.currentIndex,
            this.currentIndex = t,
            this.switchSlide())
        },
        switchSlide: function() {
            var t = this;
            1 < this.slides.length && (this.galleryAnimating = !0,
            this.options.animSpeed ? this.slides.eq(this.prevIndex).stop().animate({
                opacity: 0
            }, {
                duration: this.options.animSpeed
            }) : this.slides.eq(this.prevIndex).css({
                opacity: 0
            }),
            this.switchNext = function() {
                t.options.animSpeed ? t.slides.eq(t.currentIndex).stop().animate({
                    opacity: 1
                }, {
                    duration: t.options.animSpeed
                }) : t.slides.eq(t.currentIndex).css({
                    opacity: ""
                }),
                clearTimeout(this.nextTimer),
                this.nextTimer = setTimeout(function() {
                    t.slides.eq(t.currentIndex).css({
                        opacity: ""
                    }),
                    t.galleryAnimating = !1,
                    t.autoRotate(),
                    t.makeCallback("onChange", t)
                }, t.options.animSpeed)
            }
            ,
            this.options.switchSimultaneously ? t.switchNext() : (clearTimeout(this.switchTimer),
            this.switchTimer = setTimeout(function() {
                t.switchNext()
            }, this.options.animSpeed)),
            this.refreshState(),
            this.makeCallback("onBeforeChange", this))
        },
        refreshState: function(t) {
            this.slides.removeClass(this.options.activeClass).eq(this.currentIndex).addClass(this.options.activeClass),
            this.pagerLinks.removeClass(this.options.activeClass).eq(this.currentIndex).addClass(this.options.activeClass),
            this.curNum.html(this.currentIndex + 1),
            this.allNum.html(this.stepsCount),
            this.options.autoHeight && (t ? this.slidesHolder.css({
                height: this.options.initialHeight
            }) : this.slidesHolder.stop().animate({
                height: this.options.initialHeight
            }, {
                duration: this.options.animSpeed
            })),
            this.options.circularRotation || (this.btnPrev.add(this.btnNext).removeClass(this.options.disabledClass),
            0 === this.currentIndex && this.btnPrev.addClass(this.options.disabledClass),
            this.currentIndex === this.stepsCount - 1 && this.btnNext.addClass(this.options.disabledClass)),
            this.gallery.toggleClass("not-enough-slides", 1 === this.stepsCount)
        },
        startRotation: function() {
            this.options.autoRotation = !0,
            this.galleryHover = !1,
            this.autoRotationStopped = !1,
            this.resumeRotation()
        },
        stopRotation: function() {
            this.galleryHover = !0,
            this.autoRotationStopped = !0,
            this.pauseRotation()
        },
        pauseRotation: function() {
            this.gallery.addClass(this.options.autorotationDisabledClass),
            this.gallery.removeClass(this.options.autorotationActiveClass),
            clearTimeout(this.timer)
        },
        resumeRotation: function() {
            this.autoRotationStopped || (this.gallery.addClass(this.options.autorotationActiveClass),
            this.gallery.removeClass(this.options.autorotationDisabledClass),
            this.autoRotate())
        },
        autoRotate: function() {
            var t = this;
            clearTimeout(this.timer),
            !this.options.autoRotation || this.galleryHover || this.autoRotationStopped ? this.pauseRotation() : (this.gallery.addClass(this.options.autorotationActiveClass),
            this.timer = setTimeout(function() {
                t.nextSlide(!1)
            }, this.options.switchTime))
        },
        makeCallback: function(t) {
            if ("function" == typeof this.options[t]) {
                var e = Array.prototype.slice.call(arguments);
                e.shift(),
                this.options[t].apply(this, e)
            }
        },
        destroy: function() {
            this.isInit = !1,
            this.btnPrev.unbind(this.options.event, this.btnPrevHandler),
            this.btnNext.unbind(this.options.event, this.btnNextHandler),
            this.pagerLinks.unbind(this.options.event, this.pagerLinksHandler),
            n(window).unbind("load resize orientationchange", this.resizeHandler),
            this.stopRotation(),
            this.btnPlay.unbind(this.options.event, this.btnPlayHandler),
            this.btnPause.unbind(this.options.event, this.btnPauseHandler),
            this.btnPlayPause.unbind(this.options.event, this.btnPlayPauseHandler),
            this.gallery.unbind("mouseenter", this.hoverHandler),
            this.gallery.unbind("mouseleave", this.leaveHandler),
            this.swipeHandler && this.swipeHandler.destroy(),
            "string" == typeof this.options.generatePagination && this.pagerHolder.empty();
            var t = [this.options.galleryReadyClass, this.options.autorotationActiveClass, this.options.autorotationDisabledClass];
            this.gallery.removeClass(t.join(" ")).removeData("FadeGallery"),
            this.slidesHolder.add(this.slides).add(this.mask).removeAttr("style"),
            this.slides.removeClass(this.options.activeClass)
        }
    },
    n.fn.fadeGallery = function(i) {
        var s = Array.prototype.slice.call(arguments)
          , o = s[0];
        return this.each(function() {
            var t = jQuery(this)
              , e = t.data("FadeGallery");
            "object" == typeof i || void 0 === i ? t.data("FadeGallery", new r(n.extend({
                holder: this
            }, i))) : "string" == typeof o && e && "function" == typeof e[o] && (s.shift(),
            e[o].apply(e, s))
        })
    }
}(jQuery),
function(r) {
    "use strict";
    var e = function() {
        function n(t, e) {
            this.$field = t,
            this.$fields = e
        }
        n.prototype = {
            reg: {
                email: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
                number: "^[0-9]+$"
            },
            checkField: function() {
                return {
                    state: this.run(),
                    $fields: this.$field.add(this.additionalFields)
                }
            },
            run: function() {
                var t;
                switch (this.$field.get(0).tagName.toUpperCase()) {
                case "SELECT":
                    t = "select";
                    break;
                case "TEXTAREA":
                    t = "text";
                    break;
                default:
                    t = this.$field.data("type") || this.$field.attr("type")
                }
                var e = "check_" + t.replace(/-/g, "_")
                  , i = !0;
                return r.isFunction(this[e]) && (i = this[e]()) && this.$field.data("confirm") && (i = this.check_confirm()),
                i
            },
            check_email: function() {
                var t = this.getValue()
                  , e = this.$field.data("required") || t.length;
                return !(e && !this.check_regexp(t, this.reg.email)) && (!!e || null)
            },
            check_number: function() {
                var t = this.getValue()
                  , e = this.$field.data("required")
                  , i = this.check_regexp(t, this.reg.number)
                  , s = e || t.length;
                if (s && !i)
                    return !1;
                var o = this.$field.data("min")
                  , n = this.$field.data("max");
                return t = +t,
                !(o && (t < o || !i) || n && (n < t || !i)) && (!!(s || o || n) || null)
            },
            check_password: function() {
                return this.check_text()
            },
            check_text: function() {
                var t = this.getValue()
                  , e = this.$field.data("required");
                if (this.$field.data("required") && !t.length)
                    return !1;
                var i = +this.$field.data("min")
                  , s = +this.$field.data("max");
                if (i && t.length < i || s && t.length > s)
                    return !1;
                var o = this.$field.data("regexp");
                return !(o && !this.check_regexp(t, o)) && (!!(e || i || s || o) || null)
            },
            check_tel: function() {
                var t = this.getValue()
                  , e = this.$field.data("required");
                if (this.$field.data("required") && !t.length)
                    return !1;
                var i = +this.$field.data("min")
                  , s = +this.$field.data("max");
                if (i && t.length < i || s && t.length > s)
                    return !1;
                var o = this.$field.data("regexp");
                return !(o && !this.check_regexp(t, o)) && (!!(e || i || s || o) || null)
            },
            check_confirm: function() {
                for (var t = this.getValue(), e = this.$fields.filter('[data-confirm="' + this.$field.data("confirm") + '"]'), i = !0, s = e.length - 1; 0 <= s; s--)
                    if (e.eq(s).val() !== t || !t.length) {
                        i = !1;
                        break
                    }
                return this.additionalFields = e,
                i
            },
            check_select: function() {
                var t = this.$field.data("required");
                return (!t || 0 !== this.$field.get(0).selectedIndex) && (!!t || null)
            },
            check_radio: function() {
                var t = this.$fields.filter('[name="' + this.$field.attr("name") + '"]')
                  , e = this.$field.data("required");
                return !(e && !t.filter(":checked").length) && (this.additionalFields = t,
                !!e || null)
            },
            check_checkbox: function() {
                var t = this.$field.data("required");
                return !(t && !this.$field.prop("checked")) && (!!t || null)
            },
            check_at_least_one: function() {
                var t = this.$fields.filter('[data-name="' + this.$field.data("name") + '"]');
                return !!t.filter(":checked").length && (this.additionalFields = t,
                !0)
            },
            check_regexp: function(t, e) {
                return new RegExp(e).test(t)
            },
            getValue: function() {
                return this.$field.data("trim") && this.$field.val(r.trim(this.$field.val())),
                this.$field.val()
            }
        };
        function t(t, e) {
            this.$form = r(t).attr("novalidate", "novalidate"),
            this.options = e
        }
        return t.prototype = {
            buildSelector: function(t) {
                return t + ":not(" + this.options.skipDefaultFields + (this.options.skipFields ? "," + this.options.skipFields : "") + ")"
            },
            init: function() {
                this.fieldsSelector = this.buildSelector(":input"),
                this.$form.on("submit", this.submitHandler.bind(this)).on("keyup blur", this.fieldsSelector, this.changeHandler.bind(this)).on("change", this.buildSelector("select"), this.changeHandler.bind(this)).on("focus", this.fieldsSelector, this.focusHandler.bind(this))
            },
            submitHandler: function(t) {
                var s = this
                  , o = this.getFormFields();
                return this.getClassTarget(o).removeClass(this.options.errorClass + " " + this.options.successClass),
                this.setFormState(!0),
                o.each(function(t, e) {
                    var i = r(e);
                    s.getClassTarget(i).hasClass(s.options.errorClass) || s.setState(new n(i,o).checkField())
                }),
                this.checkSuccess(o, t)
            },
            checkSuccess: function(t, e) {
                var i = this
                  , s = 0 === this.getClassTarget(t || this.getFormFields()).filter("." + this.options.errorClass).length;
                return e && s && this.options.successSendClass && (e.preventDefault(),
                "postmessage" === this.$form.attr("action") ? (i.$form.addClass(i.options.successSendClass),
                i.$form.trigger("form-submitted")) : r.ajax({
                    url: this.$form.removeClass(this.options.successSendClass).attr("action") || "/",
                    type: this.$form.attr("method") || "POST",
                    data: this.$form.serialize(),
                    success: function() {
                        i.$form.addClass(i.options.successSendClass),
                        i.$form.trigger("form-submitted")
                    }
                })),
                this.setFormState(s),
                s
            },
            changeHandler: function(t) {
                var e = r(t.target);
                e.data("interactive") && this.setState(new n(e,this.getFormFields()).checkField()),
                this.checkSuccess()
            },
            focusHandler: function(t) {
                var e = r(t.target);
                this.getClassTarget(e).removeClass(this.options.errorClass + " " + this.options.successClass),
                this.checkSuccess()
            },
            setState: function(t) {
                this.getClassTarget(t.$fields).toggleClass(this.options.errorClass, null !== t.state && !t.state).toggleClass(this.options.successClass, null !== t.state && this.options.successClass && !!t.state)
            },
            setFormState: function(t) {
                this.options.errorFormClass && this.$form.toggleClass(this.options.errorFormClass, !t)
            },
            getClassTarget: function(t) {
                return this.options.addClassToParent ? t.closest(this.options.addClassToParent) : t
            },
            getFormFields: function() {
                return this.$form.find(this.fieldsSelector)
            }
        },
        t
    }();
    r.fn.formValidation = function(t) {
        return t = r.extend({}, {
            errorClass: "input-error",
            successClass: "",
            errorFormClass: "",
            addClassToParent: "",
            skipDefaultFields: ":button, :submit, :image, :hidden, :reset",
            skipFields: "",
            successSendClass: "form-success"
        }, t),
        this.each(function() {
            new e(this,t).init()
        })
    }
}(jQuery),
function(n) {
    n.fn.prognroll = function(t) {
        var o = n.extend({
            class: "bar",
            appendTo: "body",
            height: 5,
            color: "#50bcb6",
            custom: !1
        }, t);
        return this.each(function() {
            if (n(this).data("prognroll"))
                return !1;
            n(this).data("prognroll", !0);
            var t = n("<span>", {
                class: o.class
            });
            t.appendTo(n(o.appendTo)),
            t.css({
                position: "fixed",
                display: "block",
                top: 0,
                left: 0,
                width: 0,
                height: o.height,
                backgroundColor: o.color,
                zIndex: 9999999
            }),
            !1 === o.custom ? n(window).on("scroll resize load", function(t) {
                t.preventDefault();
                var e = n(window).scrollTop()
                  , i = n(window).outerHeight()
                  , s = e / (n(document).height() - i) * 100;
                n("." + o.class).css("width", s + "%")
            }) : n(window).on("scroll resize load", function(t) {
                t.preventDefault();
                var e = n(this).scrollTop()
                  , i = n(this).outerHeight()
                  , s = e / (n(this).prop("scrollHeight") - i) * 100;
                n("." + o.class).css("width", s + "%")
            }),
            n(window).on("hashchange", function(t) {
                t.preventDefault()
            }),
            n(window).trigger("hashchange");
            var e = n(window).scrollTop()
              , i = n(window).outerHeight()
              , s = e / (n("body").outerHeight() - i) * 100;
            n("." + o.class).css("width", s + "%")
        })
    }
}(jQuery),
function(r) {
    function n(t) {
        this.options = r.extend({
            container: null,
            hideOnClickOutside: !1,
            menuActiveClass: "nav-active",
            menuOpener: ".nav-opener",
            menuDrop: ".nav-drop",
            toggleEvent: "click",
            outsideClickEvent: "click touchstart pointerdown MSPointerDown"
        }, t),
        this.initStructure(),
        this.attachEvents(),
        this.makeCallback("onInit")
    }
    n.prototype = {
        initStructure: function() {
            this.page = r("html"),
            this.container = r(this.options.container),
            this.opener = this.container.find(this.options.menuOpener),
            this.drop = this.container.find(this.options.menuDrop)
        },
        attachEvents: function() {
            var i = this;
            t && (t(),
            t = null),
            this.outsideClickHandler = function(t) {
                if (i.isOpened()) {
                    var e = r(t.target);
                    e.closest(i.opener).length || e.closest(i.drop).length || i.hide()
                }
            }
            ,
            this.openerClickHandler = function(t) {
                t.preventDefault(),
                i.toggle()
            }
            ,
            this.opener.on(this.options.toggleEvent, this.openerClickHandler)
        },
        isOpened: function() {
            return this.container.hasClass(this.options.menuActiveClass)
        },
        show: function() {
            this.makeCallback("onBeforeShow"),
            this.container.addClass(this.options.menuActiveClass),
            this.options.hideOnClickOutside && this.page.on(this.options.outsideClickEvent, this.outsideClickHandler),
            this.makeCallback("onShow")
        },
        hide: function() {
            this.makeCallback("onBeforeHide"),
            this.container.removeClass(this.options.menuActiveClass),
            this.options.hideOnClickOutside && this.page.off(this.options.outsideClickEvent, this.outsideClickHandler),
            this.makeCallback("onHide")
        },
        toggle: function() {
            this.isOpened() ? this.hide() : this.show()
        },
        destroy: function() {
            this.container.removeClass(this.options.menuActiveClass),
            this.opener.off(this.options.toggleEvent, this.clickHandler),
            this.page.off(this.options.outsideClickEvent, this.outsideClickHandler)
        },
        makeCallback: function(t) {
            if ("function" == typeof this.options[t]) {
                var e = Array.prototype.slice.call(arguments);
                e.shift(),
                this.options[t].apply(this, e)
            }
        }
    };
    var t = function() {
        function t() {
            e = !1,
            o.removeClass(n)
        }
        var e, i, s = r(window), o = r("html"), n = "resize-active";
        s.on("resize orientationchange", function() {
            e || (e = !0,
            o.addClass(n)),
            clearTimeout(i),
            i = setTimeout(t, 500)
        })
    };
    r.fn.mobileNav = function(i) {
        var s = Array.prototype.slice.call(arguments)
          , o = s[0];
        return this.each(function() {
            var t = jQuery(this)
              , e = t.data("MobileNav");
            "object" == typeof i || void 0 === i ? t.data("MobileNav", new n(r.extend({
                container: this
            }, i))) : "string" == typeof o && e && "function" == typeof e[o] && (s.shift(),
            e[o].apply(e, s))
        })
    }
}(jQuery),
window.ResponsiveHelper = function(s) {
    var o, e = [], i = s(window), n = !1;
    function r() {
        var t = i.width();
        t !== o && (o = t,
        s.each(e, function(t, e) {
            s.each(e.data, function(t, e) {
                e.currentActive && !a(e.range[0], e.range[1]) && (e.currentActive = !1,
                "function" == typeof e.disableCallback && e.disableCallback())
            }),
            s.each(e.data, function(t, e) {
                !e.currentActive && a(e.range[0], e.range[1]) && (e.currentActive = !0,
                "function" == typeof e.enableCallback && e.enableCallback())
            })
        }))
    }
    function a(t, e) {
        var i = "";
        return 0 < t && (i += "(min-width: " + t + "px)"),
        e < 1 / 0 && (i += (i ? " and " : "") + "(max-width: " + e + "px)"),
        function(t, e, i) {
            return window.matchMedia && n ? matchMedia(t).matches : window.styleMedia ? styleMedia.matchMedium(t) : window.media ? media.matchMedium(t) : e <= o && o <= i
        }(i, t, e)
    }
    return window.matchMedia && (window.Window && window.matchMedia === Window.prototype.matchMedia ? n = !0 : -1 < window.matchMedia.toString().indexOf("native") && (n = !0)),
    i.bind("load resize orientationchange", r),
    {
        addRange: function(t) {
            var i = {
                data: {}
            };
            s.each(t, function(t, e) {
                i.data[t] = {
                    range: function(t) {
                        var e = t.split("..");
                        return [parseInt(e[0], 10) || -1 / 0, parseInt(e[1], 10) || 1 / 0].sort(function(t, e) {
                            return t - e
                        })
                    }(t),
                    enableCallback: e.on,
                    disableCallback: e.off
                }
            }),
            e.push(i),
            o = null,
            r()
        }
    }
}(jQuery),
window.addEventListener("load", function() {
    var t = document.querySelector("html.loader");
    t && t.classList.add("loaded")
}),
function(n, o, t, h) {
    "use strict";
    function a(t, e, i) {
        return setTimeout(l(t, i), e)
    }
    function s(t, e, i) {
        return !!Array.isArray(t) && (r(t, i[e], i),
        !0)
    }
    function r(t, e, i) {
        var s;
        if (t)
            if (t.forEach)
                t.forEach(e, i);
            else if (t.length !== h)
                for (s = 0; s < t.length; )
                    e.call(i, t[s], s, t),
                    s++;
            else
                for (s in t)
                    t.hasOwnProperty(s) && e.call(i, t[s], s, t)
    }
    function e(s, t, e) {
        var o = "DEPRECATED METHOD: " + t + "\n" + e + " AT \n";
        return function() {
            var t = new Error("get-stack-trace")
              , e = t && t.stack ? t.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace"
              , i = n.console && (n.console.warn || n.console.log);
            return i && i.call(n.console, o, e),
            s.apply(this, arguments)
        }
    }
    function i(t, e, i) {
        var s, o = e.prototype;
        (s = t.prototype = Object.create(o)).constructor = t,
        s._super = o,
        i && G(s, i)
    }
    function l(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }
    function c(t, e) {
        return typeof t == tt ? t.apply(e && e[0] || h, e) : t
    }
    function d(t, e) {
        return t === h ? e : t
    }
    function p(e, t, i) {
        r(v(t), function(t) {
            e.addEventListener(t, i, !1)
        })
    }
    function u(e, t, i) {
        r(v(t), function(t) {
            e.removeEventListener(t, i, !1)
        })
    }
    function f(t, e) {
        for (; t; ) {
            if (t == e)
                return !0;
            t = t.parentNode
        }
        return !1
    }
    function m(t, e) {
        return -1 < t.indexOf(e)
    }
    function v(t) {
        return t.trim().split(/\s+/g)
    }
    function g(t, e, i) {
        if (t.indexOf && !i)
            return t.indexOf(e);
        for (var s = 0; s < t.length; ) {
            if (i && t[s][i] == e || !i && t[s] === e)
                return s;
            s++
        }
        return -1
    }
    function y(t) {
        return Array.prototype.slice.call(t, 0)
    }
    function w(t, i, e) {
        for (var s = [], o = [], n = 0; n < t.length; ) {
            var r = i ? t[n][i] : t[n];
            g(o, r) < 0 && s.push(t[n]),
            o[n] = r,
            n++
        }
        return e && (s = i ? s.sort(function(t, e) {
            return t[i] > e[i]
        }) : s.sort()),
        s
    }
    function k(t, e) {
        for (var i, s, o = e[0].toUpperCase() + e.slice(1), n = 0; n < Z.length; ) {
            if ((s = (i = Z[n]) ? i + o : e)in t)
                return s;
            n++
        }
        return h
    }
    function b(t) {
        var e = t.ownerDocument || t;
        return e.defaultView || e.parentWindow || n
    }
    function C(e, t) {
        var i = this;
        this.manager = e,
        this.callback = t,
        this.element = e.element,
        this.target = e.options.inputTarget,
        this.domHandler = function(t) {
            c(e.options.enable, [e]) && i.handler(t)
        }
        ,
        this.init()
    }
    function T(t, e, i) {
        var s = i.pointers.length
          , o = i.changedPointers.length
          , n = e & ut && s - o == 0
          , r = e & (ft | mt) && s - o == 0;
        i.isFirst = !!n,
        i.isFinal = !!r,
        n && (t.session = {}),
        i.eventType = e,
        function(t, e) {
            var i = t.session
              , s = e.pointers
              , o = s.length;
            i.firstInput || (i.firstInput = S(e)),
            1 < o && !i.firstMultiple ? i.firstMultiple = S(e) : 1 === o && (i.firstMultiple = !1);
            var n = i.firstInput
              , r = i.firstMultiple
              , a = r ? r.center : n.center
              , l = e.center = x(s);
            e.timeStamp = st(),
            e.deltaTime = e.timeStamp - n.timeStamp,
            e.angle = A(a, l),
            e.distance = H(a, l),
            function(t, e) {
                var i = e.center
                  , s = t.offsetDelta || {}
                  , o = t.prevDelta || {}
                  , n = t.prevInput || {};
                e.eventType !== ut && n.eventType !== ft || (o = t.prevDelta = {
                    x: n.deltaX || 0,
                    y: n.deltaY || 0
                },
                s = t.offsetDelta = {
                    x: i.x,
                    y: i.y
                }),
                e.deltaX = o.x + (i.x - s.x),
                e.deltaY = o.y + (i.y - s.y)
            }(i, e),
            e.offsetDirection = $(e.deltaX, e.deltaY);
            var c = E(e.deltaTime, e.deltaX, e.deltaY);
            e.overallVelocityX = c.x,
            e.overallVelocityY = c.y,
            e.overallVelocity = it(c.x) > it(c.y) ? c.x : c.y,
            e.scale = r ? function(t, e) {
                return H(e[0], e[1], xt) / H(t[0], t[1], xt)
            }(r.pointers, s) : 1,
            e.rotation = r ? function(t, e) {
                return A(e[1], e[0], xt) + A(t[1], t[0], xt)
            }(r.pointers, s) : 0,
            e.maxPointers = i.prevInput ? e.pointers.length > i.prevInput.maxPointers ? e.pointers.length : i.prevInput.maxPointers : e.pointers.length,
            function(t, e) {
                var i, s, o, n, r = t.lastInterval || e, a = e.timeStamp - r.timeStamp;
                if (e.eventType != mt && (pt < a || r.velocity === h)) {
                    var l = e.deltaX - r.deltaX
                      , c = e.deltaY - r.deltaY
                      , d = E(a, l, c);
                    s = d.x,
                    o = d.y,
                    i = it(d.x) > it(d.y) ? d.x : d.y,
                    n = $(l, c),
                    t.lastInterval = e
                } else
                    i = r.velocity,
                    s = r.velocityX,
                    o = r.velocityY,
                    n = r.direction;
                e.velocity = i,
                e.velocityX = s,
                e.velocityY = o,
                e.direction = n
            }(i, e);
            var d = t.element;
            f(e.srcEvent.target, d) && (d = e.srcEvent.target),
            e.target = d
        }(t, i),
        t.emit("hammer.input", i),
        t.recognize(i),
        t.session.prevInput = i
    }
    function S(t) {
        for (var e = [], i = 0; i < t.pointers.length; )
            e[i] = {
                clientX: et(t.pointers[i].clientX),
                clientY: et(t.pointers[i].clientY)
            },
            i++;
        return {
            timeStamp: st(),
            pointers: e,
            center: x(e),
            deltaX: t.deltaX,
            deltaY: t.deltaY
        }
    }
    function x(t) {
        var e = t.length;
        if (1 === e)
            return {
                x: et(t[0].clientX),
                y: et(t[0].clientY)
            };
        for (var i = 0, s = 0, o = 0; o < e; )
            i += t[o].clientX,
            s += t[o].clientY,
            o++;
        return {
            x: et(i / e),
            y: et(s / e)
        }
    }
    function E(t, e, i) {
        return {
            x: e / t || 0,
            y: i / t || 0
        }
    }
    function $(t, e) {
        return t === e ? vt : it(t) >= it(e) ? t < 0 ? gt : yt : e < 0 ? wt : kt
    }
    function H(t, e, i) {
        var s = e[(i = i || St)[0]] - t[i[0]]
          , o = e[i[1]] - t[i[1]];
        return Math.sqrt(s * s + o * o)
    }
    function A(t, e, i) {
        var s = e[(i = i || St)[0]] - t[i[0]]
          , o = e[i[1]] - t[i[1]];
        return 180 * Math.atan2(o, s) / Math.PI
    }
    function O() {
        this.evEl = $t,
        this.evWin = Ht,
        this.pressed = !1,
        C.apply(this, arguments)
    }
    function P() {
        this.evEl = Pt,
        this.evWin = jt,
        C.apply(this, arguments),
        this.store = this.manager.session.pointerEvents = []
    }
    function j() {
        this.evTarget = "touchstart",
        this.evWin = "touchstart touchmove touchend touchcancel",
        this.started = !1,
        C.apply(this, arguments)
    }
    function I() {
        this.evTarget = Mt,
        this.targetIds = {},
        C.apply(this, arguments)
    }
    function D() {
        C.apply(this, arguments);
        var t = l(this.handler, this);
        this.touch = new I(this.manager,t),
        this.mouse = new O(this.manager,t),
        this.primaryTouch = null,
        this.lastTouches = []
    }
    function M(t) {
        var e = t.changedPointers[0];
        if (e.identifier === this.primaryTouch) {
            var i = {
                x: e.clientX,
                y: e.clientY
            };
            this.lastTouches.push(i);
            var s = this.lastTouches;
            setTimeout(function() {
                var t = s.indexOf(i);
                -1 < t && s.splice(t, 1)
            }, Lt)
        }
    }
    function L(t, e) {
        this.manager = t,
        this.set(e)
    }
    function R(t) {
        this.options = G({}, this.defaults, t || {}),
        this.id = rt++,
        this.manager = null,
        this.options.enable = d(this.options.enable, !0),
        this.state = Yt,
        this.simultaneous = {},
        this.requireFail = []
    }
    function z(t) {
        return 16 & t ? "cancel" : 8 & t ? "end" : 4 & t ? "move" : 2 & t ? "start" : ""
    }
    function F(t) {
        return t == kt ? "down" : t == wt ? "up" : t == gt ? "left" : t == yt ? "right" : ""
    }
    function N(t, e) {
        var i = e.manager;
        return i ? i.get(t) : t
    }
    function B() {
        R.apply(this, arguments)
    }
    function W() {
        B.apply(this, arguments),
        this.pX = null,
        this.pY = null
    }
    function q() {
        B.apply(this, arguments)
    }
    function _() {
        R.apply(this, arguments),
        this._timer = null,
        this._input = null
    }
    function Y() {
        B.apply(this, arguments)
    }
    function Q() {
        B.apply(this, arguments)
    }
    function X() {
        R.apply(this, arguments),
        this.pTime = !1,
        this.pCenter = !1,
        this._timer = null,
        this._input = null,
        this.count = 0
    }
    function U(t, e) {
        return (e = e || {}).recognizers = d(e.recognizers, U.defaults.preset),
        new K(t,e)
    }
    function K(t, e) {
        this.options = G({}, U.defaults, e || {}),
        this.options.inputTarget = this.options.inputTarget || t,
        this.handlers = {},
        this.session = {},
        this.recognizers = [],
        this.oldCssProps = {},
        this.element = t,
        this.input = function(t) {
            var e = t.options.inputClass;
            return new (e || (lt ? P : ct ? I : at ? D : O))(t,T)
        }(this),
        this.touchAction = new L(this,this.options.touchAction),
        V(this, !0),
        r(this.options.recognizers, function(t) {
            var e = this.add(new t[0](t[1]));
            t[2] && e.recognizeWith(t[2]),
            t[3] && e.requireFailure(t[3])
        }, this)
    }
    function V(i, s) {
        var o, n = i.element;
        n.style && (r(i.options.cssProps, function(t, e) {
            o = k(n.style, e),
            s ? (i.oldCssProps[o] = n.style[o],
            n.style[o] = t) : n.style[o] = i.oldCssProps[o] || ""
        }),
        s || (i.oldCssProps = {}))
    }
    var G, Z = ["", "webkit", "Moz", "MS", "ms", "o"], J = o.createElement("div"), tt = "function", et = Math.round, it = Math.abs, st = Date.now;
    G = "function" != typeof Object.assign ? function(t) {
        if (t === h || null === t)
            throw new TypeError("Cannot convert undefined or null to object");
        for (var e = Object(t), i = 1; i < arguments.length; i++) {
            var s = arguments[i];
            if (s !== h && null !== s)
                for (var o in s)
                    s.hasOwnProperty(o) && (e[o] = s[o])
        }
        return e
    }
    : Object.assign;
    var ot = e(function(t, e, i) {
        for (var s = Object.keys(e), o = 0; o < s.length; )
            (!i || i && t[s[o]] === h) && (t[s[o]] = e[s[o]]),
            o++;
        return t
    }, "extend", "Use `assign`.")
      , nt = e(function(t, e) {
        return ot(t, e, !0)
    }, "merge", "Use `assign`.")
      , rt = 1
      , at = "ontouchstart"in n
      , lt = k(n, "PointerEvent") !== h
      , ct = at && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent)
      , dt = "touch"
      , ht = "mouse"
      , pt = 25
      , ut = 1
      , ft = 4
      , mt = 8
      , vt = 1
      , gt = 2
      , yt = 4
      , wt = 8
      , kt = 16
      , bt = gt | yt
      , Ct = wt | kt
      , Tt = bt | Ct
      , St = ["x", "y"]
      , xt = ["clientX", "clientY"];
    C.prototype = {
        handler: function() {},
        init: function() {
            this.evEl && p(this.element, this.evEl, this.domHandler),
            this.evTarget && p(this.target, this.evTarget, this.domHandler),
            this.evWin && p(b(this.element), this.evWin, this.domHandler)
        },
        destroy: function() {
            this.evEl && u(this.element, this.evEl, this.domHandler),
            this.evTarget && u(this.target, this.evTarget, this.domHandler),
            this.evWin && u(b(this.element), this.evWin, this.domHandler)
        }
    };
    var Et = {
        mousedown: ut,
        mousemove: 2,
        mouseup: ft
    }
      , $t = "mousedown"
      , Ht = "mousemove mouseup";
    i(O, C, {
        handler: function(t) {
            var e = Et[t.type];
            e & ut && 0 === t.button && (this.pressed = !0),
            2 & e && 1 !== t.which && (e = ft),
            this.pressed && (e & ft && (this.pressed = !1),
            this.callback(this.manager, e, {
                pointers: [t],
                changedPointers: [t],
                pointerType: ht,
                srcEvent: t
            }))
        }
    });
    var At = {
        pointerdown: ut,
        pointermove: 2,
        pointerup: ft,
        pointercancel: mt,
        pointerout: mt
    }
      , Ot = {
        2: dt,
        3: "pen",
        4: ht,
        5: "kinect"
    }
      , Pt = "pointerdown"
      , jt = "pointermove pointerup pointercancel";
    n.MSPointerEvent && !n.PointerEvent && (Pt = "MSPointerDown",
    jt = "MSPointerMove MSPointerUp MSPointerCancel"),
    i(P, C, {
        handler: function(t) {
            var e = this.store
              , i = !1
              , s = t.type.toLowerCase().replace("ms", "")
              , o = At[s]
              , n = Ot[t.pointerType] || t.pointerType
              , r = n == dt
              , a = g(e, t.pointerId, "pointerId");
            o & ut && (0 === t.button || r) ? a < 0 && (e.push(t),
            a = e.length - 1) : o & (ft | mt) && (i = !0),
            a < 0 || (e[a] = t,
            this.callback(this.manager, o, {
                pointers: e,
                changedPointers: [t],
                pointerType: n,
                srcEvent: t
            }),
            i && e.splice(a, 1))
        }
    });
    var It = {
        touchstart: ut,
        touchmove: 2,
        touchend: ft,
        touchcancel: mt
    };
    i(j, C, {
        handler: function(t) {
            var e = It[t.type];
            if (e === ut && (this.started = !0),
            this.started) {
                var i = function(t, e) {
                    var i = y(t.touches)
                      , s = y(t.changedTouches);
                    return e & (ft | mt) && (i = w(i.concat(s), "identifier", !0)),
                    [i, s]
                }
                .call(this, t, e);
                e & (ft | mt) && i[0].length - i[1].length == 0 && (this.started = !1),
                this.callback(this.manager, e, {
                    pointers: i[0],
                    changedPointers: i[1],
                    pointerType: dt,
                    srcEvent: t
                })
            }
        }
    });
    var Dt = {
        touchstart: ut,
        touchmove: 2,
        touchend: ft,
        touchcancel: mt
    }
      , Mt = "touchstart touchmove touchend touchcancel";
    i(I, C, {
        handler: function(t) {
            var e = Dt[t.type]
              , i = function(t, e) {
                var i = y(t.touches)
                  , s = this.targetIds;
                if (e & (2 | ut) && 1 === i.length)
                    return s[i[0].identifier] = !0,
                    [i, i];
                var o, n, r = y(t.changedTouches), a = [], l = this.target;
                if (n = i.filter(function(t) {
                    return f(t.target, l)
                }),
                e === ut)
                    for (o = 0; o < n.length; )
                        s[n[o].identifier] = !0,
                        o++;
                for (o = 0; o < r.length; )
                    s[r[o].identifier] && a.push(r[o]),
                    e & (ft | mt) && delete s[r[o].identifier],
                    o++;
                return a.length ? [w(n.concat(a), "identifier", !0), a] : void 0
            }
            .call(this, t, e);
            i && this.callback(this.manager, e, {
                pointers: i[0],
                changedPointers: i[1],
                pointerType: dt,
                srcEvent: t
            })
        }
    });
    var Lt = 2500;
    i(D, C, {
        handler: function(t, e, i) {
            var s = i.pointerType == dt
              , o = i.pointerType == ht;
            if (!(o && i.sourceCapabilities && i.sourceCapabilities.firesTouchEvents)) {
                if (s)
                    (function(t, e) {
                        t & ut ? (this.primaryTouch = e.changedPointers[0].identifier,
                        M.call(this, e)) : t & (ft | mt) && M.call(this, e)
                    }
                    ).call(this, e, i);
                else if (o && function(t) {
                    for (var e = t.srcEvent.clientX, i = t.srcEvent.clientY, s = 0; s < this.lastTouches.length; s++) {
                        var o = this.lastTouches[s]
                          , n = Math.abs(e - o.x)
                          , r = Math.abs(i - o.y);
                        if (n <= 25 && r <= 25)
                            return !0
                    }
                    return !1
                }
                .call(this, i))
                    return;
                this.callback(t, e, i)
            }
        },
        destroy: function() {
            this.touch.destroy(),
            this.mouse.destroy()
        }
    });
    var Rt = k(J.style, "touchAction")
      , zt = Rt !== h
      , Ft = "compute"
      , Nt = "manipulation"
      , Bt = "none"
      , Wt = "pan-x"
      , qt = "pan-y"
      , _t = function() {
        if (!zt)
            return !1;
        var e = {}
          , i = n.CSS && n.CSS.supports;
        return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(t) {
            e[t] = !i || n.CSS.supports("touch-action", t)
        }),
        e
    }();
    L.prototype = {
        set: function(t) {
            t == Ft && (t = this.compute()),
            zt && this.manager.element.style && _t[t] && (this.manager.element.style[Rt] = t),
            this.actions = t.toLowerCase().trim()
        },
        update: function() {
            this.set(this.manager.options.touchAction)
        },
        compute: function() {
            var e = [];
            return r(this.manager.recognizers, function(t) {
                c(t.options.enable, [t]) && (e = e.concat(t.getTouchAction()))
            }),
            function(t) {
                if (m(t, Bt))
                    return Bt;
                var e = m(t, Wt)
                  , i = m(t, qt);
                return e && i ? Bt : e || i ? e ? Wt : qt : m(t, Nt) ? Nt : "auto"
            }(e.join(" "))
        },
        preventDefaults: function(t) {
            var e = t.srcEvent
              , i = t.offsetDirection;
            if (!this.manager.session.prevented) {
                var s = this.actions
                  , o = m(s, Bt) && !_t[Bt]
                  , n = m(s, qt) && !_t[qt]
                  , r = m(s, Wt) && !_t[Wt];
                if (o) {
                    var a = 1 === t.pointers.length
                      , l = t.distance < 2
                      , c = t.deltaTime < 250;
                    if (a && l && c)
                        return
                }
                return r && n ? void 0 : o || n && i & bt || r && i & Ct ? this.preventSrc(e) : void 0
            }
            e.preventDefault()
        },
        preventSrc: function(t) {
            this.manager.session.prevented = !0,
            t.preventDefault()
        }
    };
    var Yt = 1;
    R.prototype = {
        defaults: {},
        set: function(t) {
            return G(this.options, t),
            this.manager && this.manager.touchAction.update(),
            this
        },
        recognizeWith: function(t) {
            if (s(t, "recognizeWith", this))
                return this;
            var e = this.simultaneous;
            return e[(t = N(t, this)).id] || (e[t.id] = t).recognizeWith(this),
            this
        },
        dropRecognizeWith: function(t) {
            return s(t, "dropRecognizeWith", this) || (t = N(t, this),
            delete this.simultaneous[t.id]),
            this
        },
        requireFailure: function(t) {
            if (s(t, "requireFailure", this))
                return this;
            var e = this.requireFail;
            return -1 === g(e, t = N(t, this)) && (e.push(t),
            t.requireFailure(this)),
            this
        },
        dropRequireFailure: function(t) {
            if (s(t, "dropRequireFailure", this))
                return this;
            t = N(t, this);
            var e = g(this.requireFail, t);
            return -1 < e && this.requireFail.splice(e, 1),
            this
        },
        hasRequireFailures: function() {
            return 0 < this.requireFail.length
        },
        canRecognizeWith: function(t) {
            return !!this.simultaneous[t.id]
        },
        emit: function(e) {
            function t(t) {
                i.manager.emit(t, e)
            }
            var i = this
              , s = this.state;
            s < 8 && t(i.options.event + z(s)),
            t(i.options.event),
            e.additionalEvent && t(e.additionalEvent),
            8 <= s && t(i.options.event + z(s))
        },
        tryEmit: function(t) {
            return this.canEmit() ? this.emit(t) : void (this.state = 32)
        },
        canEmit: function() {
            for (var t = 0; t < this.requireFail.length; ) {
                if (!(this.requireFail[t].state & (32 | Yt)))
                    return !1;
                t++
            }
            return !0
        },
        recognize: function(t) {
            var e = G({}, t);
            return c(this.options.enable, [this, e]) ? (56 & this.state && (this.state = Yt),
            this.state = this.process(e),
            void (30 & this.state && this.tryEmit(e))) : (this.reset(),
            void (this.state = 32))
        },
        process: function(t) {},
        getTouchAction: function() {},
        reset: function() {}
    },
    i(B, R, {
        defaults: {
            pointers: 1
        },
        attrTest: function(t) {
            var e = this.options.pointers;
            return 0 === e || t.pointers.length === e
        },
        process: function(t) {
            var e = this.state
              , i = t.eventType
              , s = 6 & e
              , o = this.attrTest(t);
            return s && (i & mt || !o) ? 16 | e : s || o ? i & ft ? 8 | e : 2 & e ? 4 | e : 2 : 32
        }
    }),
    i(W, B, {
        defaults: {
            event: "pan",
            threshold: 10,
            pointers: 1,
            direction: Tt
        },
        getTouchAction: function() {
            var t = this.options.direction
              , e = [];
            return t & bt && e.push(qt),
            t & Ct && e.push(Wt),
            e
        },
        directionTest: function(t) {
            var e = this.options
              , i = !0
              , s = t.distance
              , o = t.direction
              , n = t.deltaX
              , r = t.deltaY;
            return o & e.direction || (s = e.direction & bt ? (o = 0 === n ? vt : n < 0 ? gt : yt,
            i = n != this.pX,
            Math.abs(t.deltaX)) : (o = 0 === r ? vt : r < 0 ? wt : kt,
            i = r != this.pY,
            Math.abs(t.deltaY))),
            t.direction = o,
            i && s > e.threshold && o & e.direction
        },
        attrTest: function(t) {
            return B.prototype.attrTest.call(this, t) && (2 & this.state || !(2 & this.state) && this.directionTest(t))
        },
        emit: function(t) {
            this.pX = t.deltaX,
            this.pY = t.deltaY;
            var e = F(t.direction);
            e && (t.additionalEvent = this.options.event + e),
            this._super.emit.call(this, t)
        }
    }),
    i(q, B, {
        defaults: {
            event: "pinch",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [Bt]
        },
        attrTest: function(t) {
            return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || 2 & this.state)
        },
        emit: function(t) {
            if (1 !== t.scale) {
                var e = t.scale < 1 ? "in" : "out";
                t.additionalEvent = this.options.event + e
            }
            this._super.emit.call(this, t)
        }
    }),
    i(_, R, {
        defaults: {
            event: "press",
            pointers: 1,
            time: 251,
            threshold: 9
        },
        getTouchAction: function() {
            return ["auto"]
        },
        process: function(t) {
            var e = this.options
              , i = t.pointers.length === e.pointers
              , s = t.distance < e.threshold
              , o = t.deltaTime > e.time;
            if (this._input = t,
            !s || !i || t.eventType & (ft | mt) && !o)
                this.reset();
            else if (t.eventType & ut)
                this.reset(),
                this._timer = a(function() {
                    this.state = 8,
                    this.tryEmit()
                }, e.time, this);
            else if (t.eventType & ft)
                return 8;
            return 32
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function(t) {
            8 === this.state && (t && t.eventType & ft ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = st(),
            this.manager.emit(this.options.event, this._input)))
        }
    }),
    i(Y, B, {
        defaults: {
            event: "rotate",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [Bt]
        },
        attrTest: function(t) {
            return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || 2 & this.state)
        }
    }),
    i(Q, B, {
        defaults: {
            event: "swipe",
            threshold: 10,
            velocity: .3,
            direction: bt | Ct,
            pointers: 1
        },
        getTouchAction: function() {
            return W.prototype.getTouchAction.call(this)
        },
        attrTest: function(t) {
            var e, i = this.options.direction;
            return i & (bt | Ct) ? e = t.overallVelocity : i & bt ? e = t.overallVelocityX : i & Ct && (e = t.overallVelocityY),
            this._super.attrTest.call(this, t) && i & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && it(e) > this.options.velocity && t.eventType & ft
        },
        emit: function(t) {
            var e = F(t.offsetDirection);
            e && this.manager.emit(this.options.event + e, t),
            this.manager.emit(this.options.event, t)
        }
    }),
    i(X, R, {
        defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 9,
            posThreshold: 10
        },
        getTouchAction: function() {
            return [Nt]
        },
        process: function(t) {
            var e = this.options
              , i = t.pointers.length === e.pointers
              , s = t.distance < e.threshold
              , o = t.deltaTime < e.time;
            if (this.reset(),
            t.eventType & ut && 0 === this.count)
                return this.failTimeout();
            if (s && o && i) {
                if (t.eventType != ft)
                    return this.failTimeout();
                var n = !this.pTime || t.timeStamp - this.pTime < e.interval
                  , r = !this.pCenter || H(this.pCenter, t.center) < e.posThreshold;
                if (this.pTime = t.timeStamp,
                this.pCenter = t.center,
                r && n ? this.count += 1 : this.count = 1,
                this._input = t,
                0 == this.count % e.taps)
                    return this.hasRequireFailures() ? (this._timer = a(function() {
                        this.state = 8,
                        this.tryEmit()
                    }, e.interval, this),
                    2) : 8
            }
            return 32
        },
        failTimeout: function() {
            return this._timer = a(function() {
                this.state = 32
            }, this.options.interval, this),
            32
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function() {
            8 == this.state && (this._input.tapCount = this.count,
            this.manager.emit(this.options.event, this._input))
        }
    }),
    U.VERSION = "2.0.8",
    U.defaults = {
        domEvents: !1,
        touchAction: Ft,
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [[Y, {
            enable: !1
        }], [q, {
            enable: !1
        }, ["rotate"]], [Q, {
            direction: bt
        }], [W, {
            direction: bt
        }, ["swipe"]], [X], [X, {
            event: "doubletap",
            taps: 2
        }, ["tap"]], [_]],
        cssProps: {
            userSelect: "none",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    };
    K.prototype = {
        set: function(t) {
            return G(this.options, t),
            t.touchAction && this.touchAction.update(),
            t.inputTarget && (this.input.destroy(),
            this.input.target = t.inputTarget,
            this.input.init()),
            this
        },
        stop: function(t) {
            this.session.stopped = t ? 2 : 1
        },
        recognize: function(t) {
            var e = this.session;
            if (!e.stopped) {
                this.touchAction.preventDefaults(t);
                var i, s = this.recognizers, o = e.curRecognizer;
                (!o || o && 8 & o.state) && (o = e.curRecognizer = null);
                for (var n = 0; n < s.length; )
                    i = s[n],
                    2 === e.stopped || o && i != o && !i.canRecognizeWith(o) ? i.reset() : i.recognize(t),
                    !o && 14 & i.state && (o = e.curRecognizer = i),
                    n++
            }
        },
        get: function(t) {
            if (t instanceof R)
                return t;
            for (var e = this.recognizers, i = 0; i < e.length; i++)
                if (e[i].options.event == t)
                    return e[i];
            return null
        },
        add: function(t) {
            if (s(t, "add", this))
                return this;
            var e = this.get(t.options.event);
            return e && this.remove(e),
            this.recognizers.push(t),
            (t.manager = this).touchAction.update(),
            t
        },
        remove: function(t) {
            if (s(t, "remove", this))
                return this;
            if (t = this.get(t)) {
                var e = this.recognizers
                  , i = g(e, t);
                -1 !== i && (e.splice(i, 1),
                this.touchAction.update())
            }
            return this
        },
        on: function(t, e) {
            if (t !== h && e !== h) {
                var i = this.handlers;
                return r(v(t), function(t) {
                    i[t] = i[t] || [],
                    i[t].push(e)
                }),
                this
            }
        },
        off: function(t, e) {
            if (t !== h) {
                var i = this.handlers;
                return r(v(t), function(t) {
                    e ? i[t] && i[t].splice(g(i[t], e), 1) : delete i[t]
                }),
                this
            }
        },
        emit: function(t, e) {
            this.options.domEvents && function(t, e) {
                var i = o.createEvent("Event");
                i.initEvent(t, !0, !0),
                (i.gesture = e).target.dispatchEvent(i)
            }(t, e);
            var i = this.handlers[t] && this.handlers[t].slice();
            if (i && i.length) {
                e.type = t,
                e.preventDefault = function() {
                    e.srcEvent.preventDefault()
                }
                ;
                for (var s = 0; s < i.length; )
                    i[s](e),
                    s++
            }
        },
        destroy: function() {
            this.element && V(this, !1),
            this.handlers = {},
            this.session = {},
            this.input.destroy(),
            this.element = null
        }
    },
    G(U, {
        INPUT_START: ut,
        INPUT_MOVE: 2,
        INPUT_END: ft,
        INPUT_CANCEL: mt,
        STATE_POSSIBLE: Yt,
        STATE_BEGAN: 2,
        STATE_CHANGED: 4,
        STATE_ENDED: 8,
        STATE_RECOGNIZED: 8,
        STATE_CANCELLED: 16,
        STATE_FAILED: 32,
        DIRECTION_NONE: vt,
        DIRECTION_LEFT: gt,
        DIRECTION_RIGHT: yt,
        DIRECTION_UP: wt,
        DIRECTION_DOWN: kt,
        DIRECTION_HORIZONTAL: bt,
        DIRECTION_VERTICAL: Ct,
        DIRECTION_ALL: Tt,
        Manager: K,
        Input: C,
        TouchAction: L,
        TouchInput: I,
        MouseInput: O,
        PointerEventInput: P,
        TouchMouseInput: D,
        SingleTouchInput: j,
        Recognizer: R,
        AttrRecognizer: B,
        Tap: X,
        Pan: W,
        Swipe: Q,
        Pinch: q,
        Rotate: Y,
        Press: _,
        on: p,
        off: u,
        each: r,
        merge: nt,
        extend: ot,
        assign: G,
        inherit: i,
        bindFn: l,
        prefixed: k
    }),
    (void 0 !== n ? n : "undefined" != typeof self ? self : {}).Hammer = U,
    "function" == typeof define && define.amd ? define(function() {
        return U
    }) : "undefined" != typeof module && module.exports ? module.exports = U : n.Hammer = U
}(window, document),
function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function(c) {
    "use strict";
    var o, r = window.Slick || {};
    (o = 0,
    r = function(t, e) {
        var i, s = this;
        s.defaults = {
            accessibility: !0,
            adaptiveHeight: !1,
            appendArrows: c(t),
            appendDots: c(t),
            arrows: !0,
            asNavFor: null,
            prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
            nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
            autoplay: !1,
            autoplaySpeed: 3e3,
            centerMode: !1,
            centerPadding: "50px",
            cssEase: "ease",
            customPaging: function(t, e) {
                return c('<button type="button" />').text(e + 1)
            },
            dots: !1,
            dotsClass: "slick-dots",
            draggable: !0,
            easing: "linear",
            edgeFriction: .35,
            fade: !1,
            focusOnSelect: !1,
            focusOnChange: !1,
            infinite: !0,
            initialSlide: 0,
            lazyLoad: "ondemand",
            mobileFirst: !1,
            pauseOnHover: !0,
            pauseOnFocus: !0,
            pauseOnDotsHover: !1,
            respondTo: "window",
            responsive: null,
            rows: 1,
            rtl: !1,
            slide: "",
            slidesPerRow: 1,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            swipe: !0,
            swipeToSlide: !1,
            touchMove: !0,
            touchThreshold: 5,
            useCSS: !0,
            useTransform: !0,
            variableWidth: !1,
            vertical: !1,
            verticalSwiping: !1,
            waitForAnimate: !0,
            zIndex: 1e3
        },
        s.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            scrolling: !1,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            swiping: !1,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
            unslicked: !1
        },
        c.extend(s, s.initials),
        s.activeBreakpoint = null,
        s.animType = null,
        s.animProp = null,
        s.breakpoints = [],
        s.breakpointSettings = [],
        s.cssTransitions = !1,
        s.focussed = !1,
        s.interrupted = !1,
        s.hidden = "hidden",
        s.paused = !0,
        s.positionProp = null,
        s.respondTo = null,
        s.rowCount = 1,
        s.shouldClick = !0,
        s.$slider = c(t),
        s.$slidesCache = null,
        s.transformType = null,
        s.transitionType = null,
        s.visibilityChange = "visibilitychange",
        s.windowWidth = 0,
        s.windowTimer = null,
        i = c(t).data("slick") || {},
        s.options = c.extend({}, s.defaults, e, i),
        s.currentSlide = s.options.initialSlide,
        s.originalSettings = s.options,
        void 0 !== document.mozHidden ? (s.hidden = "mozHidden",
        s.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (s.hidden = "webkitHidden",
        s.visibilityChange = "webkitvisibilitychange"),
        s.autoPlay = c.proxy(s.autoPlay, s),
        s.autoPlayClear = c.proxy(s.autoPlayClear, s),
        s.autoPlayIterator = c.proxy(s.autoPlayIterator, s),
        s.changeSlide = c.proxy(s.changeSlide, s),
        s.clickHandler = c.proxy(s.clickHandler, s),
        s.selectHandler = c.proxy(s.selectHandler, s),
        s.setPosition = c.proxy(s.setPosition, s),
        s.swipeHandler = c.proxy(s.swipeHandler, s),
        s.dragHandler = c.proxy(s.dragHandler, s),
        s.keyHandler = c.proxy(s.keyHandler, s),
        s.instanceUid = o++,
        s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/,
        s.registerBreakpoints(),
        s.init(!0)
    }
    ).prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }
    ,
    r.prototype.addSlide = r.prototype.slickAdd = function(t, e, i) {
        var s = this;
        if ("boolean" == typeof e)
            i = e,
            e = null;
        else if (e < 0 || e >= s.slideCount)
            return !1;
        s.unload(),
        "number" == typeof e ? 0 === e && 0 === s.$slides.length ? c(t).appendTo(s.$slideTrack) : i ? c(t).insertBefore(s.$slides.eq(e)) : c(t).insertAfter(s.$slides.eq(e)) : !0 === i ? c(t).prependTo(s.$slideTrack) : c(t).appendTo(s.$slideTrack),
        s.$slides = s.$slideTrack.children(this.options.slide),
        s.$slideTrack.children(this.options.slide).detach(),
        s.$slideTrack.append(s.$slides),
        s.$slides.each(function(t, e) {
            c(e).attr("data-slick-index", t)
        }),
        s.$slidesCache = s.$slides,
        s.reinit()
    }
    ,
    r.prototype.animateHeight = function() {
        var t = this;
        if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.animate({
                height: e
            }, t.options.speed)
        }
    }
    ,
    r.prototype.animateSlide = function(t, e) {
        var i = {}
          , s = this;
        s.animateHeight(),
        !0 === s.options.rtl && !1 === s.options.vertical && (t = -t),
        !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
            left: t
        }, s.options.speed, s.options.easing, e) : s.$slideTrack.animate({
            top: t
        }, s.options.speed, s.options.easing, e) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft),
        c({
            animStart: s.currentLeft
        }).animate({
            animStart: t
        }, {
            duration: s.options.speed,
            easing: s.options.easing,
            step: function(t) {
                t = Math.ceil(t),
                !1 === s.options.vertical ? i[s.animType] = "translate(" + t + "px, 0px)" : i[s.animType] = "translate(0px," + t + "px)",
                s.$slideTrack.css(i)
            },
            complete: function() {
                e && e.call()
            }
        })) : (s.applyTransition(),
        t = Math.ceil(t),
        !1 === s.options.vertical ? i[s.animType] = "translate3d(" + t + "px, 0px, 0px)" : i[s.animType] = "translate3d(0px," + t + "px, 0px)",
        s.$slideTrack.css(i),
        e && setTimeout(function() {
            s.disableTransition(),
            e.call()
        }, s.options.speed))
    }
    ,
    r.prototype.getNavTarget = function() {
        var t = this.options.asNavFor;
        return t && null !== t && (t = c(t).not(this.$slider)),
        t
    }
    ,
    r.prototype.asNavFor = function(e) {
        var t = this.getNavTarget();
        null !== t && "object" == typeof t && t.each(function() {
            var t = c(this).slick("getSlick");
            t.unslicked || t.slideHandler(e, !0)
        })
    }
    ,
    r.prototype.applyTransition = function(t) {
        var e = this
          , i = {};
        !1 === e.options.fade ? i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase,
        !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
    }
    ,
    r.prototype.autoPlay = function() {
        var t = this;
        t.autoPlayClear(),
        t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
    }
    ,
    r.prototype.autoPlayClear = function() {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer)
    }
    ,
    r.prototype.autoPlayIterator = function() {
        var t = this
          , e = t.currentSlide + t.options.slidesToScroll;
        t.paused || t.interrupted || t.focussed || (!1 === t.options.infinite && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll,
        t.currentSlide - 1 == 0 && (t.direction = 1))),
        t.slideHandler(e))
    }
    ,
    r.prototype.buildArrows = function() {
        var t = this;
        !0 === t.options.arrows && (t.$prevArrow = c(t.options.prevArrow).addClass("slick-arrow"),
        t.$nextArrow = c(t.options.nextArrow).addClass("slick-arrow"),
        t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows),
        t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows),
        !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }
    ,
    r.prototype.buildDots = function() {
        var t, e, i = this;
        if (!0 === i.options.dots && i.slideCount > i.options.slidesToShow) {
            for (i.$slider.addClass("slick-dotted"),
            e = c("<ul />").addClass(i.options.dotsClass),
            t = 0; t <= i.getDotCount(); t += 1)
                e.append(c("<li />").append(i.options.customPaging.call(this, i, t)));
            i.$dots = e.appendTo(i.options.appendDots),
            i.$dots.find("li").first().addClass("slick-active")
        }
    }
    ,
    r.prototype.buildOut = function() {
        var t = this;
        t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"),
        t.slideCount = t.$slides.length,
        t.$slides.each(function(t, e) {
            c(e).attr("data-slick-index", t).data("originalStyling", c(e).attr("style") || "")
        }),
        t.$slider.addClass("slick-slider"),
        t.$slideTrack = 0 === t.slideCount ? c('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(),
        t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(),
        t.$slideTrack.css("opacity", 0),
        !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1),
        c("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"),
        t.setupInfinite(),
        t.buildArrows(),
        t.buildDots(),
        t.updateDots(),
        t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0),
        !0 === t.options.draggable && t.$list.addClass("draggable")
    }
    ,
    r.prototype.buildRows = function() {
        var t, e, i, s, o, n, r, a = this;
        if (s = document.createDocumentFragment(),
        n = a.$slider.children(),
        0 < a.options.rows) {
            for (r = a.options.slidesPerRow * a.options.rows,
            o = Math.ceil(n.length / r),
            t = 0; t < o; t++) {
                var l = document.createElement("div");
                for (e = 0; e < a.options.rows; e++) {
                    var c = document.createElement("div");
                    for (i = 0; i < a.options.slidesPerRow; i++) {
                        var d = t * r + (e * a.options.slidesPerRow + i);
                        n.get(d) && c.appendChild(n.get(d))
                    }
                    l.appendChild(c)
                }
                s.appendChild(l)
            }
            a.$slider.empty().append(s),
            a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }
    ,
    r.prototype.checkResponsive = function(t, e) {
        var i, s, o, n = this, r = !1, a = n.$slider.width(), l = window.innerWidth || c(window).width();
        if ("window" === n.respondTo ? o = l : "slider" === n.respondTo ? o = a : "min" === n.respondTo && (o = Math.min(l, a)),
        n.options.responsive && n.options.responsive.length && null !== n.options.responsive) {
            for (i in s = null,
            n.breakpoints)
                n.breakpoints.hasOwnProperty(i) && (!1 === n.originalSettings.mobileFirst ? o < n.breakpoints[i] && (s = n.breakpoints[i]) : o > n.breakpoints[i] && (s = n.breakpoints[i]));
            null !== s ? null !== n.activeBreakpoint ? s === n.activeBreakpoint && !e || (n.activeBreakpoint = s,
            "unslick" === n.breakpointSettings[s] ? n.unslick(s) : (n.options = c.extend({}, n.originalSettings, n.breakpointSettings[s]),
            !0 === t && (n.currentSlide = n.options.initialSlide),
            n.refresh(t)),
            r = s) : (n.activeBreakpoint = s,
            "unslick" === n.breakpointSettings[s] ? n.unslick(s) : (n.options = c.extend({}, n.originalSettings, n.breakpointSettings[s]),
            !0 === t && (n.currentSlide = n.options.initialSlide),
            n.refresh(t)),
            r = s) : null !== n.activeBreakpoint && (n.activeBreakpoint = null,
            n.options = n.originalSettings,
            !0 === t && (n.currentSlide = n.options.initialSlide),
            n.refresh(t),
            r = s),
            t || !1 === r || n.$slider.trigger("breakpoint", [n, r])
        }
    }
    ,
    r.prototype.changeSlide = function(t, e) {
        var i, s, o = this, n = c(t.currentTarget);
        switch (n.is("a") && t.preventDefault(),
        n.is("li") || (n = n.closest("li")),
        i = o.slideCount % o.options.slidesToScroll != 0 ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll,
        t.data.message) {
        case "previous":
            s = 0 == i ? o.options.slidesToScroll : o.options.slidesToShow - i,
            o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - s, !1, e);
            break;
        case "next":
            s = 0 == i ? o.options.slidesToScroll : i,
            o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + s, !1, e);
            break;
        case "index":
            var r = 0 === t.data.index ? 0 : t.data.index || n.index() * o.options.slidesToScroll;
            o.slideHandler(o.checkNavigable(r), !1, e),
            n.children().trigger("focus");
            break;
        default:
            return
        }
    }
    ,
    r.prototype.checkNavigable = function(t) {
        var e, i;
        if (i = 0,
        t > (e = this.getNavigableIndexes())[e.length - 1])
            t = e[e.length - 1];
        else
            for (var s in e) {
                if (t < e[s]) {
                    t = i;
                    break
                }
                i = e[s]
            }
        return t
    }
    ,
    r.prototype.cleanUpEvents = function() {
        var t = this;
        t.options.dots && null !== t.$dots && (c("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", c.proxy(t.interrupt, t, !0)).off("mouseleave.slick", c.proxy(t.interrupt, t, !1)),
        !0 === t.options.accessibility && t.$dots.off("keydown.slick", t.keyHandler)),
        t.$slider.off("focus.slick blur.slick"),
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide),
        t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide),
        !0 === t.options.accessibility && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler),
        t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))),
        t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler),
        t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler),
        t.$list.off("touchend.slick mouseup.slick", t.swipeHandler),
        t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler),
        t.$list.off("click.slick", t.clickHandler),
        c(document).off(t.visibilityChange, t.visibility),
        t.cleanUpSlideEvents(),
        !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler),
        !0 === t.options.focusOnSelect && c(t.$slideTrack).children().off("click.slick", t.selectHandler),
        c(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange),
        c(window).off("resize.slick.slick-" + t.instanceUid, t.resize),
        c("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault),
        c(window).off("load.slick.slick-" + t.instanceUid, t.setPosition)
    }
    ,
    r.prototype.cleanUpSlideEvents = function() {
        var t = this;
        t.$list.off("mouseenter.slick", c.proxy(t.interrupt, t, !0)),
        t.$list.off("mouseleave.slick", c.proxy(t.interrupt, t, !1))
    }
    ,
    r.prototype.cleanUpRows = function() {
        var t;
        0 < this.options.rows && ((t = this.$slides.children().children()).removeAttr("style"),
        this.$slider.empty().append(t))
    }
    ,
    r.prototype.clickHandler = function(t) {
        !1 === this.shouldClick && (t.stopImmediatePropagation(),
        t.stopPropagation(),
        t.preventDefault())
    }
    ,
    r.prototype.destroy = function(t) {
        var e = this;
        e.autoPlayClear(),
        e.touchObject = {},
        e.cleanUpEvents(),
        c(".slick-cloned", e.$slider).detach(),
        e.$dots && e.$dots.remove(),
        e.$prevArrow && e.$prevArrow.length && (e.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove()),
        e.$nextArrow && e.$nextArrow.length && (e.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove()),
        e.$slides && (e.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            c(this).attr("style", c(this).data("originalStyling"))
        }),
        e.$slideTrack.children(this.options.slide).detach(),
        e.$slideTrack.detach(),
        e.$list.detach(),
        e.$slider.append(e.$slides)),
        e.cleanUpRows(),
        e.$slider.removeClass("slick-slider"),
        e.$slider.removeClass("slick-initialized"),
        e.$slider.removeClass("slick-dotted"),
        e.unslicked = !0,
        t || e.$slider.trigger("destroy", [e])
    }
    ,
    r.prototype.disableTransition = function(t) {
        var e = {};
        e[this.transitionType] = "",
        !1 === this.options.fade ? this.$slideTrack.css(e) : this.$slides.eq(t).css(e)
    }
    ,
    r.prototype.fadeSlide = function(t, e) {
        var i = this;
        !1 === i.cssTransitions ? (i.$slides.eq(t).css({
            zIndex: i.options.zIndex
        }),
        i.$slides.eq(t).animate({
            opacity: 1
        }, i.options.speed, i.options.easing, e)) : (i.applyTransition(t),
        i.$slides.eq(t).css({
            opacity: 1,
            zIndex: i.options.zIndex
        }),
        e && setTimeout(function() {
            i.disableTransition(t),
            e.call()
        }, i.options.speed))
    }
    ,
    r.prototype.fadeSlideOut = function(t) {
        var e = this;
        !1 === e.cssTransitions ? e.$slides.eq(t).animate({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(t),
        e.$slides.eq(t).css({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }))
    }
    ,
    r.prototype.filterSlides = r.prototype.slickFilter = function(t) {
        var e = this;
        null !== t && (e.$slidesCache = e.$slides,
        e.unload(),
        e.$slideTrack.children(this.options.slide).detach(),
        e.$slidesCache.filter(t).appendTo(e.$slideTrack),
        e.reinit())
    }
    ,
    r.prototype.focusHandler = function() {
        var i = this;
        i.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(t) {
            t.stopImmediatePropagation();
            var e = c(this);
            setTimeout(function() {
                i.options.pauseOnFocus && (i.focussed = e.is(":focus"),
                i.autoPlay())
            }, 0)
        })
    }
    ,
    r.prototype.getCurrent = r.prototype.slickCurrentSlide = function() {
        return this.currentSlide
    }
    ,
    r.prototype.getDotCount = function() {
        var t = this
          , e = 0
          , i = 0
          , s = 0;
        if (!0 === t.options.infinite)
            if (t.slideCount <= t.options.slidesToShow)
                ++s;
            else
                for (; e < t.slideCount; )
                    ++s,
                    e = i + t.options.slidesToScroll,
                    i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        else if (!0 === t.options.centerMode)
            s = t.slideCount;
        else if (t.options.asNavFor)
            for (; e < t.slideCount; )
                ++s,
                e = i + t.options.slidesToScroll,
                i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        else
            s = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
        return s - 1
    }
    ,
    r.prototype.getLeft = function(t) {
        var e, i, s, o, n = this, r = 0;
        return n.slideOffset = 0,
        i = n.$slides.first().outerHeight(!0),
        !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1,
        o = -1,
        !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? o = -1.5 : 1 === n.options.slidesToShow && (o = -2)),
        r = i * n.options.slidesToShow * o),
        n.slideCount % n.options.slidesToScroll != 0 && t + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (r = t > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (t - n.slideCount)) * n.slideWidth * -1,
        (n.options.slidesToShow - (t - n.slideCount)) * i * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1,
        n.slideCount % n.options.slidesToScroll * i * -1))) : t + n.options.slidesToShow > n.slideCount && (n.slideOffset = (t + n.options.slidesToShow - n.slideCount) * n.slideWidth,
        r = (t + n.options.slidesToShow - n.slideCount) * i),
        n.slideCount <= n.options.slidesToShow && (r = n.slideOffset = 0),
        !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0,
        n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)),
        e = !1 === n.options.vertical ? t * n.slideWidth * -1 + n.slideOffset : t * i * -1 + r,
        !0 === n.options.variableWidth && (s = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(t) : n.$slideTrack.children(".slick-slide").eq(t + n.options.slidesToShow),
        e = !0 === n.options.rtl ? s[0] ? -1 * (n.$slideTrack.width() - s[0].offsetLeft - s.width()) : 0 : s[0] ? -1 * s[0].offsetLeft : 0,
        !0 === n.options.centerMode && (s = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(t) : n.$slideTrack.children(".slick-slide").eq(t + n.options.slidesToShow + 1),
        e = !0 === n.options.rtl ? s[0] ? -1 * (n.$slideTrack.width() - s[0].offsetLeft - s.width()) : 0 : s[0] ? -1 * s[0].offsetLeft : 0,
        e += (n.$list.width() - s.outerWidth()) / 2)),
        e
    }
    ,
    r.prototype.getOption = r.prototype.slickGetOption = function(t) {
        return this.options[t]
    }
    ,
    r.prototype.getNavigableIndexes = function() {
        var t, e = this, i = 0, s = 0, o = [];
        for (t = !1 === e.options.infinite ? e.slideCount : (i = -1 * e.options.slidesToScroll,
        s = -1 * e.options.slidesToScroll,
        2 * e.slideCount); i < t; )
            o.push(i),
            i = s + e.options.slidesToScroll,
            s += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return o
    }
    ,
    r.prototype.getSlick = function() {
        return this
    }
    ,
    r.prototype.getSlideCount = function() {
        var i, s, o = this;
        return s = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0,
        !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function(t, e) {
            if (e.offsetLeft - s + c(e).outerWidth() / 2 > -1 * o.swipeLeft)
                return i = e,
                !1
        }),
        Math.abs(c(i).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
    }
    ,
    r.prototype.goTo = r.prototype.slickGoTo = function(t, e) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(t)
            }
        }, e)
    }
    ,
    r.prototype.init = function(t) {
        var e = this;
        c(e.$slider).hasClass("slick-initialized") || (c(e.$slider).addClass("slick-initialized"),
        e.buildRows(),
        e.buildOut(),
        e.setProps(),
        e.startLoad(),
        e.loadSlider(),
        e.initializeEvents(),
        e.updateArrows(),
        e.updateDots(),
        e.checkResponsive(!0),
        e.focusHandler()),
        t && e.$slider.trigger("init", [e]),
        !0 === e.options.accessibility && e.initADA(),
        e.options.autoplay && (e.paused = !1,
        e.autoPlay())
    }
    ,
    r.prototype.initADA = function() {
        var s = this
          , i = Math.ceil(s.slideCount / s.options.slidesToShow)
          , o = s.getNavigableIndexes().filter(function(t) {
            return 0 <= t && t < s.slideCount
        });
        s.$slides.add(s.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }),
        null !== s.$dots && (s.$slides.not(s.$slideTrack.find(".slick-cloned")).each(function(t) {
            var e = o.indexOf(t);
            if (c(this).attr({
                role: "tabpanel",
                id: "slick-slide" + s.instanceUid + t,
                tabindex: -1
            }),
            -1 !== e) {
                var i = "slick-slide-control" + s.instanceUid + e;
                c("#" + i).length && c(this).attr({
                    "aria-describedby": i
                })
            }
        }),
        s.$dots.attr("role", "tablist").find("li").each(function(t) {
            var e = o[t];
            c(this).attr({
                role: "presentation"
            }),
            c(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + s.instanceUid + t,
                "aria-controls": "slick-slide" + s.instanceUid + e,
                "aria-label": t + 1 + " of " + i,
                "aria-selected": null,
                tabindex: "-1"
            })
        }).eq(s.currentSlide).find("button").attr({
            "aria-selected": "true",
            tabindex: "0"
        }).end());
        for (var t = s.currentSlide, e = t + s.options.slidesToShow; t < e; t++)
            s.options.focusOnChange ? s.$slides.eq(t).attr({
                tabindex: "0"
            }) : s.$slides.eq(t).removeAttr("tabindex");
        s.activateADA()
    }
    ,
    r.prototype.initArrowEvents = function() {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, t.changeSlide),
        t.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, t.changeSlide),
        !0 === t.options.accessibility && (t.$prevArrow.on("keydown.slick", t.keyHandler),
        t.$nextArrow.on("keydown.slick", t.keyHandler)))
    }
    ,
    r.prototype.initDotEvents = function() {
        var t = this;
        !0 === t.options.dots && t.slideCount > t.options.slidesToShow && (c("li", t.$dots).on("click.slick", {
            message: "index"
        }, t.changeSlide),
        !0 === t.options.accessibility && t.$dots.on("keydown.slick", t.keyHandler)),
        !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && t.slideCount > t.options.slidesToShow && c("li", t.$dots).on("mouseenter.slick", c.proxy(t.interrupt, t, !0)).on("mouseleave.slick", c.proxy(t.interrupt, t, !1))
    }
    ,
    r.prototype.initSlideEvents = function() {
        var t = this;
        t.options.pauseOnHover && (t.$list.on("mouseenter.slick", c.proxy(t.interrupt, t, !0)),
        t.$list.on("mouseleave.slick", c.proxy(t.interrupt, t, !1)))
    }
    ,
    r.prototype.initializeEvents = function() {
        var t = this;
        t.initArrowEvents(),
        t.initDotEvents(),
        t.initSlideEvents(),
        t.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, t.swipeHandler),
        t.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, t.swipeHandler),
        t.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, t.swipeHandler),
        t.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, t.swipeHandler),
        t.$list.on("click.slick", t.clickHandler),
        c(document).on(t.visibilityChange, c.proxy(t.visibility, t)),
        !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler),
        !0 === t.options.focusOnSelect && c(t.$slideTrack).children().on("click.slick", t.selectHandler),
        c(window).on("orientationchange.slick.slick-" + t.instanceUid, c.proxy(t.orientationChange, t)),
        c(window).on("resize.slick.slick-" + t.instanceUid, c.proxy(t.resize, t)),
        c("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault),
        c(window).on("load.slick.slick-" + t.instanceUid, t.setPosition),
        c(t.setPosition)
    }
    ,
    r.prototype.initUI = function() {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(),
        t.$nextArrow.show()),
        !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.show()
    }
    ,
    r.prototype.keyHandler = function(t) {
        var e = this;
        t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && !0 === e.options.accessibility ? e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "next" : "previous"
            }
        }) : 39 === t.keyCode && !0 === e.options.accessibility && e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "previous" : "next"
            }
        }))
    }
    ,
    r.prototype.lazyLoad = function() {
        function t(t) {
            c("img[data-lazy]", t).each(function() {
                var t = c(this)
                  , e = c(this).attr("data-lazy")
                  , i = c(this).attr("data-srcset")
                  , s = c(this).attr("data-sizes") || n.$slider.attr("data-sizes")
                  , o = document.createElement("img");
                o.onload = function() {
                    t.animate({
                        opacity: 0
                    }, 100, function() {
                        i && (t.attr("srcset", i),
                        s && t.attr("sizes", s)),
                        t.attr("src", e).animate({
                            opacity: 1
                        }, 200, function() {
                            t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }),
                        n.$slider.trigger("lazyLoaded", [n, t, e])
                    })
                }
                ,
                o.onerror = function() {
                    t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                    n.$slider.trigger("lazyLoadError", [n, t, e])
                }
                ,
                o.src = e
            })
        }
        var e, i, s, n = this;
        if (!0 === n.options.centerMode ? s = !0 === n.options.infinite ? (i = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (i = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)),
        n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (i = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide,
        s = Math.ceil(i + n.options.slidesToShow),
        !0 === n.options.fade && (0 < i && i--,
        s <= n.slideCount && s++)),
        e = n.$slider.find(".slick-slide").slice(i, s),
        "anticipated" === n.options.lazyLoad)
            for (var o = i - 1, r = s, a = n.$slider.find(".slick-slide"), l = 0; l < n.options.slidesToScroll; l++)
                o < 0 && (o = n.slideCount - 1),
                e = (e = e.add(a.eq(o))).add(a.eq(r)),
                o--,
                r++;
        t(e),
        n.slideCount <= n.options.slidesToShow ? t(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? t(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && t(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
    }
    ,
    r.prototype.loadSlider = function() {
        var t = this;
        t.setPosition(),
        t.$slideTrack.css({
            opacity: 1
        }),
        t.$slider.removeClass("slick-loading"),
        t.initUI(),
        "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
    }
    ,
    r.prototype.next = r.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }
    ,
    r.prototype.orientationChange = function() {
        this.checkResponsive(),
        this.setPosition()
    }
    ,
    r.prototype.pause = r.prototype.slickPause = function() {
        this.autoPlayClear(),
        this.paused = !0
    }
    ,
    r.prototype.play = r.prototype.slickPlay = function() {
        var t = this;
        t.autoPlay(),
        t.options.autoplay = !0,
        t.paused = !1,
        t.focussed = !1,
        t.interrupted = !1
    }
    ,
    r.prototype.postSlide = function(t) {
        var e = this;
        e.unslicked || (e.$slider.trigger("afterChange", [e, t]),
        e.animating = !1,
        e.slideCount > e.options.slidesToShow && e.setPosition(),
        e.swipeLeft = null,
        e.options.autoplay && e.autoPlay(),
        !0 === e.options.accessibility && (e.initADA(),
        e.options.focusOnChange && c(e.$slides.get(e.currentSlide)).attr("tabindex", 0).focus()))
    }
    ,
    r.prototype.prev = r.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }
    ,
    r.prototype.preventDefault = function(t) {
        t.preventDefault()
    }
    ,
    r.prototype.progressiveLazyLoad = function(t) {
        t = t || 1;
        var e, i, s, o, n, r = this, a = c("img[data-lazy]", r.$slider);
        a.length ? (e = a.first(),
        i = e.attr("data-lazy"),
        s = e.attr("data-srcset"),
        o = e.attr("data-sizes") || r.$slider.attr("data-sizes"),
        (n = document.createElement("img")).onload = function() {
            s && (e.attr("srcset", s),
            o && e.attr("sizes", o)),
            e.attr("src", i).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),
            !0 === r.options.adaptiveHeight && r.setPosition(),
            r.$slider.trigger("lazyLoaded", [r, e, i]),
            r.progressiveLazyLoad()
        }
        ,
        n.onerror = function() {
            t < 3 ? setTimeout(function() {
                r.progressiveLazyLoad(t + 1)
            }, 500) : (e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
            r.$slider.trigger("lazyLoadError", [r, e, i]),
            r.progressiveLazyLoad())
        }
        ,
        n.src = i) : r.$slider.trigger("allImagesLoaded", [r])
    }
    ,
    r.prototype.refresh = function(t) {
        var e, i, s = this;
        i = s.slideCount - s.options.slidesToShow,
        !s.options.infinite && s.currentSlide > i && (s.currentSlide = i),
        s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
        e = s.currentSlide,
        s.destroy(!0),
        c.extend(s, s.initials, {
            currentSlide: e
        }),
        s.init(),
        t || s.changeSlide({
            data: {
                message: "index",
                index: e
            }
        }, !1)
    }
    ,
    r.prototype.registerBreakpoints = function() {
        var t, e, i, s = this, o = s.options.responsive || null;
        if ("array" === c.type(o) && o.length) {
            for (t in s.respondTo = s.options.respondTo || "window",
            o)
                if (i = s.breakpoints.length - 1,
                o.hasOwnProperty(t)) {
                    for (e = o[t].breakpoint; 0 <= i; )
                        s.breakpoints[i] && s.breakpoints[i] === e && s.breakpoints.splice(i, 1),
                        i--;
                    s.breakpoints.push(e),
                    s.breakpointSettings[e] = o[t].settings
                }
            s.breakpoints.sort(function(t, e) {
                return s.options.mobileFirst ? t - e : e - t
            })
        }
    }
    ,
    r.prototype.reinit = function() {
        var t = this;
        t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"),
        t.slideCount = t.$slides.length,
        t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll),
        t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0),
        t.registerBreakpoints(),
        t.setProps(),
        t.setupInfinite(),
        t.buildArrows(),
        t.updateArrows(),
        t.initArrowEvents(),
        t.buildDots(),
        t.updateDots(),
        t.initDotEvents(),
        t.cleanUpSlideEvents(),
        t.initSlideEvents(),
        t.checkResponsive(!1, !0),
        !0 === t.options.focusOnSelect && c(t.$slideTrack).children().on("click.slick", t.selectHandler),
        t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0),
        t.setPosition(),
        t.focusHandler(),
        t.paused = !t.options.autoplay,
        t.autoPlay(),
        t.$slider.trigger("reInit", [t])
    }
    ,
    r.prototype.resize = function() {
        var t = this;
        c(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay),
        t.windowDelay = window.setTimeout(function() {
            t.windowWidth = c(window).width(),
            t.checkResponsive(),
            t.unslicked || t.setPosition()
        }, 50))
    }
    ,
    r.prototype.removeSlide = r.prototype.slickRemove = function(t, e, i) {
        var s = this;
        if (t = "boolean" == typeof t ? !0 === (e = t) ? 0 : s.slideCount - 1 : !0 === e ? --t : t,
        s.slideCount < 1 || t < 0 || t > s.slideCount - 1)
            return !1;
        s.unload(),
        !0 === i ? s.$slideTrack.children().remove() : s.$slideTrack.children(this.options.slide).eq(t).remove(),
        s.$slides = s.$slideTrack.children(this.options.slide),
        s.$slideTrack.children(this.options.slide).detach(),
        s.$slideTrack.append(s.$slides),
        s.$slidesCache = s.$slides,
        s.reinit()
    }
    ,
    r.prototype.setCSS = function(t) {
        var e, i, s = this, o = {};
        !0 === s.options.rtl && (t = -t),
        e = "left" == s.positionProp ? Math.ceil(t) + "px" : "0px",
        i = "top" == s.positionProp ? Math.ceil(t) + "px" : "0px",
        o[s.positionProp] = t,
        !1 === s.transformsEnabled || (!(o = {}) === s.cssTransitions ? o[s.animType] = "translate(" + e + ", " + i + ")" : o[s.animType] = "translate3d(" + e + ", " + i + ", 0px)"),
        s.$slideTrack.css(o)
    }
    ,
    r.prototype.setDimensions = function() {
        var t = this;
        !1 === t.options.vertical ? !0 === t.options.centerMode && t.$list.css({
            padding: "0px " + t.options.centerPadding
        }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow),
        !0 === t.options.centerMode && t.$list.css({
            padding: t.options.centerPadding + " 0px"
        })),
        t.listWidth = t.$list.width(),
        t.listHeight = t.$list.height(),
        !1 === t.options.vertical && !1 === t.options.variableWidth ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow),
        t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : !0 === t.options.variableWidth ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth),
        t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
        var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
        !1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
    }
    ,
    r.prototype.setFade = function() {
        var i, s = this;
        s.$slides.each(function(t, e) {
            i = s.slideWidth * t * -1,
            !0 === s.options.rtl ? c(e).css({
                position: "relative",
                right: i,
                top: 0,
                zIndex: s.options.zIndex - 2,
                opacity: 0
            }) : c(e).css({
                position: "relative",
                left: i,
                top: 0,
                zIndex: s.options.zIndex - 2,
                opacity: 0
            })
        }),
        s.$slides.eq(s.currentSlide).css({
            zIndex: s.options.zIndex - 1,
            opacity: 1
        })
    }
    ,
    r.prototype.setHeight = function() {
        var t = this;
        if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.css("height", e)
        }
    }
    ,
    r.prototype.setOption = r.prototype.slickSetOption = function() {
        var t, e, i, s, o, n = this, r = !1;
        if ("object" === c.type(arguments[0]) ? (i = arguments[0],
        r = arguments[1],
        o = "multiple") : "string" === c.type(arguments[0]) && (s = arguments[1],
        r = arguments[2],
        "responsive" === (i = arguments[0]) && "array" === c.type(arguments[1]) ? o = "responsive" : void 0 !== arguments[1] && (o = "single")),
        "single" === o)
            n.options[i] = s;
        else if ("multiple" === o)
            c.each(i, function(t, e) {
                n.options[t] = e
            });
        else if ("responsive" === o)
            for (e in s)
                if ("array" !== c.type(n.options.responsive))
                    n.options.responsive = [s[e]];
                else {
                    for (t = n.options.responsive.length - 1; 0 <= t; )
                        n.options.responsive[t].breakpoint === s[e].breakpoint && n.options.responsive.splice(t, 1),
                        t--;
                    n.options.responsive.push(s[e])
                }
        r && (n.unload(),
        n.reinit())
    }
    ,
    r.prototype.setPosition = function() {
        var t = this;
        t.setDimensions(),
        t.setHeight(),
        !1 === t.options.fade ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(),
        t.$slider.trigger("setPosition", [t])
    }
    ,
    r.prototype.setProps = function() {
        var t = this
          , e = document.body.style;
        t.positionProp = !0 === t.options.vertical ? "top" : "left",
        "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"),
        void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === t.options.useCSS && (t.cssTransitions = !0),
        t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex),
        void 0 !== e.OTransform && (t.animType = "OTransform",
        t.transformType = "-o-transform",
        t.transitionType = "OTransition",
        void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)),
        void 0 !== e.MozTransform && (t.animType = "MozTransform",
        t.transformType = "-moz-transform",
        t.transitionType = "MozTransition",
        void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)),
        void 0 !== e.webkitTransform && (t.animType = "webkitTransform",
        t.transformType = "-webkit-transform",
        t.transitionType = "webkitTransition",
        void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)),
        void 0 !== e.msTransform && (t.animType = "msTransform",
        t.transformType = "-ms-transform",
        t.transitionType = "msTransition",
        void 0 === e.msTransform && (t.animType = !1)),
        void 0 !== e.transform && !1 !== t.animType && (t.animType = "transform",
        t.transformType = "transform",
        t.transitionType = "transition"),
        t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType
    }
    ,
    r.prototype.setSlideClasses = function(t) {
        var e, i, s, o, n = this;
        if (i = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"),
        n.$slides.eq(t).addClass("slick-current"),
        !0 === n.options.centerMode) {
            var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
            e = Math.floor(n.options.slidesToShow / 2),
            !0 === n.options.infinite && (e <= t && t <= n.slideCount - 1 - e ? n.$slides.slice(t - e + r, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (s = n.options.slidesToShow + t,
            i.slice(s - e + 1 + r, s + e + 2).addClass("slick-active").attr("aria-hidden", "false")),
            0 === t ? i.eq(i.length - 1 - n.options.slidesToShow).addClass("slick-center") : t === n.slideCount - 1 && i.eq(n.options.slidesToShow).addClass("slick-center")),
            n.$slides.eq(t).addClass("slick-center")
        } else
            0 <= t && t <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(t, t + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= n.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = n.slideCount % n.options.slidesToShow,
            s = !0 === n.options.infinite ? n.options.slidesToShow + t : t,
            n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - t < n.options.slidesToShow ? i.slice(s - (n.options.slidesToShow - o), s + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(s, s + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad()
    }
    ,
    r.prototype.setupInfinite = function() {
        var t, e, i, s = this;
        if (!0 === s.options.fade && (s.options.centerMode = !1),
        !0 === s.options.infinite && !1 === s.options.fade && (e = null,
        s.slideCount > s.options.slidesToShow)) {
            for (i = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow,
            t = s.slideCount; t > s.slideCount - i; t -= 1)
                e = t - 1,
                c(s.$slides[e]).clone(!0).attr("id", "").attr("data-slick-index", e - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
            for (t = 0; t < i + s.slideCount; t += 1)
                e = t,
                c(s.$slides[e]).clone(!0).attr("id", "").attr("data-slick-index", e + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
            s.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                c(this).attr("id", "")
            })
        }
    }
    ,
    r.prototype.interrupt = function(t) {
        t || this.autoPlay(),
        this.interrupted = t
    }
    ,
    r.prototype.selectHandler = function(t) {
        var e = c(t.target).is(".slick-slide") ? c(t.target) : c(t.target).parents(".slick-slide")
          , i = parseInt(e.attr("data-slick-index"));
        i = i || 0,
        this.slideCount <= this.options.slidesToShow ? this.slideHandler(i, !1, !0) : this.slideHandler(i)
    }
    ,
    r.prototype.slideHandler = function(t, e, i) {
        var s, o, n, r, a, l = null, c = this;
        if (e = e || !1,
        !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === t))
            if (!1 === e && c.asNavFor(t),
            s = t,
            l = c.getLeft(s),
            r = c.getLeft(c.currentSlide),
            c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft,
            !1 === c.options.infinite && !1 === c.options.centerMode && (t < 0 || t > c.getDotCount() * c.options.slidesToScroll))
                !1 === c.options.fade && (s = c.currentSlide,
                !0 !== i && c.slideCount > c.options.slidesToShow ? c.animateSlide(r, function() {
                    c.postSlide(s)
                }) : c.postSlide(s));
            else if (!1 === c.options.infinite && !0 === c.options.centerMode && (t < 0 || t > c.slideCount - c.options.slidesToScroll))
                !1 === c.options.fade && (s = c.currentSlide,
                !0 !== i && c.slideCount > c.options.slidesToShow ? c.animateSlide(r, function() {
                    c.postSlide(s)
                }) : c.postSlide(s));
            else {
                if (c.options.autoplay && clearInterval(c.autoPlayTimer),
                o = s < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + s : s >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : s - c.slideCount : s,
                c.animating = !0,
                c.$slider.trigger("beforeChange", [c, c.currentSlide, o]),
                n = c.currentSlide,
                c.currentSlide = o,
                c.setSlideClasses(c.currentSlide),
                c.options.asNavFor && (a = (a = c.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide),
                c.updateDots(),
                c.updateArrows(),
                !0 === c.options.fade)
                    return !0 !== i ? (c.fadeSlideOut(n),
                    c.fadeSlide(o, function() {
                        c.postSlide(o)
                    })) : c.postSlide(o),
                    void c.animateHeight();
                !0 !== i && c.slideCount > c.options.slidesToShow ? c.animateSlide(l, function() {
                    c.postSlide(o)
                }) : c.postSlide(o)
            }
    }
    ,
    r.prototype.startLoad = function() {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(),
        t.$nextArrow.hide()),
        !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(),
        t.$slider.addClass("slick-loading")
    }
    ,
    r.prototype.swipeDirection = function() {
        var t, e, i, s, o = this;
        return t = o.touchObject.startX - o.touchObject.curX,
        e = o.touchObject.startY - o.touchObject.curY,
        i = Math.atan2(e, t),
        (s = Math.round(180 * i / Math.PI)) < 0 && (s = 360 - Math.abs(s)),
        s <= 45 && 0 <= s ? !1 === o.options.rtl ? "left" : "right" : s <= 360 && 315 <= s ? !1 === o.options.rtl ? "left" : "right" : 135 <= s && s <= 225 ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? 35 <= s && s <= 135 ? "down" : "up" : "vertical"
    }
    ,
    r.prototype.swipeEnd = function(t) {
        var e, i, s = this;
        if (s.dragging = !1,
        s.swiping = !1,
        s.scrolling)
            return s.scrolling = !1;
        if (s.interrupted = !1,
        s.shouldClick = !(10 < s.touchObject.swipeLength),
        void 0 === s.touchObject.curX)
            return !1;
        if (!0 === s.touchObject.edgeHit && s.$slider.trigger("edge", [s, s.swipeDirection()]),
        s.touchObject.swipeLength >= s.touchObject.minSwipe) {
            switch (i = s.swipeDirection()) {
            case "left":
            case "down":
                e = s.options.swipeToSlide ? s.checkNavigable(s.currentSlide + s.getSlideCount()) : s.currentSlide + s.getSlideCount(),
                s.currentDirection = 0;
                break;
            case "right":
            case "up":
                e = s.options.swipeToSlide ? s.checkNavigable(s.currentSlide - s.getSlideCount()) : s.currentSlide - s.getSlideCount(),
                s.currentDirection = 1
            }
            "vertical" != i && (s.slideHandler(e),
            s.touchObject = {},
            s.$slider.trigger("swipe", [s, i]))
        } else
            s.touchObject.startX !== s.touchObject.curX && (s.slideHandler(s.currentSlide),
            s.touchObject = {})
    }
    ,
    r.prototype.swipeHandler = function(t) {
        var e = this;
        if (!(!1 === e.options.swipe || "ontouchend"in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== t.type.indexOf("mouse")))
            switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1,
            e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold,
            !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
            t.data.action) {
            case "start":
                e.swipeStart(t);
                break;
            case "move":
                e.swipeMove(t);
                break;
            case "end":
                e.swipeEnd(t)
            }
    }
    ,
    r.prototype.swipeMove = function(t) {
        var e, i, s, o, n, r, a = this;
        return n = void 0 !== t.originalEvent ? t.originalEvent.touches : null,
        !(!a.dragging || a.scrolling || n && 1 !== n.length) && (e = a.getLeft(a.currentSlide),
        a.touchObject.curX = void 0 !== n ? n[0].pageX : t.clientX,
        a.touchObject.curY = void 0 !== n ? n[0].pageY : t.clientY,
        a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))),
        r = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))),
        !a.options.verticalSwiping && !a.swiping && 4 < r ? !(a.scrolling = !0) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = r),
        i = a.swipeDirection(),
        void 0 !== t.originalEvent && 4 < a.touchObject.swipeLength && (a.swiping = !0,
        t.preventDefault()),
        o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1),
        !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1),
        s = a.touchObject.swipeLength,
        (a.touchObject.edgeHit = !1) === a.options.infinite && (0 === a.currentSlide && "right" === i || a.currentSlide >= a.getDotCount() && "left" === i) && (s = a.touchObject.swipeLength * a.options.edgeFriction,
        a.touchObject.edgeHit = !0),
        !1 === a.options.vertical ? a.swipeLeft = e + s * o : a.swipeLeft = e + s * (a.$list.height() / a.listWidth) * o,
        !0 === a.options.verticalSwiping && (a.swipeLeft = e + s * o),
        !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null,
        !1) : void a.setCSS(a.swipeLeft))))
    }
    ,
    r.prototype.swipeStart = function(t) {
        var e, i = this;
        if (i.interrupted = !0,
        1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow)
            return !(i.touchObject = {});
        void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]),
        i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX,
        i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY,
        i.dragging = !0
    }
    ,
    r.prototype.unfilterSlides = r.prototype.slickUnfilter = function() {
        var t = this;
        null !== t.$slidesCache && (t.unload(),
        t.$slideTrack.children(this.options.slide).detach(),
        t.$slidesCache.appendTo(t.$slideTrack),
        t.reinit())
    }
    ,
    r.prototype.unload = function() {
        var t = this;
        c(".slick-cloned", t.$slider).remove(),
        t.$dots && t.$dots.remove(),
        t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(),
        t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(),
        t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }
    ,
    r.prototype.unslick = function(t) {
        this.$slider.trigger("unslick", [this, t]),
        this.destroy()
    }
    ,
    r.prototype.updateArrows = function() {
        var t = this;
        Math.floor(t.options.slidesToShow / 2),
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && !0 === t.options.centerMode && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }
    ,
    r.prototype.updateDots = function() {
        var t = this;
        null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").end(),
        t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active"))
    }
    ,
    r.prototype.visibility = function() {
        this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1)
    }
    ,
    c.fn.slick = function() {
        var t, e, i = this, s = arguments[0], o = Array.prototype.slice.call(arguments, 1), n = i.length;
        for (t = 0; t < n; t++)
            if ("object" == typeof s || void 0 === s ? i[t].slick = new r(i[t],s) : e = i[t].slick[s].apply(i[t].slick, o),
            void 0 !== e)
                return e;
        return i
    }
}),
function(e, i) {
    "function" == typeof define && define.amd ? define(["jquery"], function(t) {
        return i(e, t)
    }) : "object" == typeof module && "object" == typeof module.exports ? module.exports = i(e, require("jquery")) : e.lity = i(e, e.jQuery || e.Zepto)
}("undefined" != typeof window ? window : this, function(t, d) {
    "use strict";
    function h(t) {
        var e = y();
        return A && t.length ? (t.one(A, e.resolve),
        setTimeout(e.resolve, 500)) : e.resolve(),
        e.promise()
    }
    function p(t, e, i) {
        if (1 === arguments.length)
            return d.extend({}, t);
        if ("string" == typeof e) {
            if (void 0 === i)
                return void 0 === t[e] ? null : t[e];
            t[e] = i
        } else
            d.extend(t, e);
        return this
    }
    function i(t) {
        for (var e, i = decodeURI(t.split("#")[0]).split("&"), s = {}, o = 0, n = i.length; o < n; o++)
            i[o] && (s[(e = i[o].split("="))[0]] = e[1]);
        return s
    }
    function s(t, e) {
        return t + (-1 < t.indexOf("?") ? "&" : "?") + d.param(e)
    }
    function o(t, e) {
        var i = t.indexOf("#");
        return -1 === i ? e : (0 < i && (t = t.substr(i)),
        e + t)
    }
    function e(t, e) {
        function i() {
            n.reject(function(t) {
                return d('<span class="lity-error"/>').append(t)
            }("Failed loading image"))
        }
        var s = e.opener() && e.opener().data("lity-desc") || "Image with no description"
          , o = d('<img src="' + t + '" alt="' + s + '"/>')
          , n = y();
        return o.on("load", function() {
            if (0 === this.naturalWidth)
                return i();
            n.resolve(o)
        }).on("error", i),
        n.promise()
    }
    function n(t) {
        return '<div class="lity-iframe-container"><iframe frameborder="0" allowfullscreen src="' + t + '"/></div>'
    }
    function u() {
        return v.documentElement.clientHeight ? v.documentElement.clientHeight : Math.round(g.height())
    }
    function f(t) {
        var e = r();
        e && (27 === t.keyCode && e.options("esc") && e.close(),
        9 === t.keyCode && function(t, e) {
            var i = e.element().find(c)
              , s = i.index(v.activeElement);
            t.shiftKey && s <= 0 ? (i.get(i.length - 1).focus(),
            t.preventDefault()) : t.shiftKey || s !== i.length - 1 || (i.get(0).focus(),
            t.preventDefault())
        }(t, e))
    }
    function m() {
        d.each(k, function(t, e) {
            e.resize()
        })
    }
    function r() {
        return 0 === k.length ? null : k[0]
    }
    function a(t, e, i, s) {
        var o, n, r, a = this, l = !1, c = !1;
        e = d.extend({}, T, e),
        n = d(e.template),
        a.element = function() {
            return n
        }
        ,
        a.opener = function() {
            return i
        }
        ,
        a.options = d.proxy(p, a, e),
        a.handlers = d.proxy(p, a, e.handlers),
        a.resize = function() {
            l && !c && r.css("max-height", u() + "px").trigger("lity:resize", [a])
        }
        ,
        a.close = function() {
            if (l && !c) {
                c = !0,
                function(e) {
                    e.element().attr(b, "true"),
                    1 === k.length && (w.removeClass("lity-active"),
                    g.off({
                        resize: m,
                        keydown: f
                    })),
                    ((k = d.grep(k, function(t) {
                        return e !== t
                    })).length ? k[0].element() : d(".lity-hidden")).removeClass("lity-hidden").each(function() {
                        var t = d(this)
                          , e = t.data(C);
                        e ? t.attr(b, e) : t.removeAttr(b),
                        t.removeData(C)
                    })
                }(a);
                var t = y();
                if (s && (v.activeElement === n[0] || d.contains(n[0], v.activeElement)))
                    try {
                        s.focus()
                    } catch (t) {}
                return r.trigger("lity:close", [a]),
                n.removeClass("lity-opened").addClass("lity-closed"),
                h(r.add(n)).always(function() {
                    r.trigger("lity:remove", [a]),
                    n.remove(),
                    n = void 0,
                    t.resolve()
                }),
                t.promise()
            }
        }
        ,
        o = function(i, s, o, t) {
            var n, r = "inline", a = d.extend({}, o);
            return t && a[t] ? (n = a[t](i, s),
            r = t) : (d.each(["inline", "iframe"], function(t, e) {
                delete a[e],
                a[e] = o[e]
            }),
            d.each(a, function(t, e) {
                return !e || !(!e.test || e.test(i, s)) || (!1 !== (n = e(i, s)) ? (r = t,
                !1) : void 0)
            })),
            {
                handler: r,
                content: n || ""
            }
        }(t, a, e.handlers, e.handler),
        n.attr(b, "false").addClass("lity-loading lity-opened lity-" + o.handler).appendTo("body").focus().on("click", "[data-lity-close]", function(t) {
            d(t.target).is("[data-lity-close]") && a.close()
        }).trigger("lity:open", [a]),
        function(t) {
            1 === k.unshift(t) && (w.addClass("lity-active"),
            g.on({
                resize: m,
                keydown: f
            })),
            d("body > *").not(t.element()).addClass("lity-hidden").each(function() {
                var t = d(this);
                void 0 === t.data(C) && t.data(C, t.attr(b) || null)
            }).attr(b, "true")
        }(a),
        d.when(o.content).always(function(t) {
            r = d(t).css("max-height", u() + "px"),
            n.find(".lity-loader").each(function() {
                var t = d(this);
                h(t).always(function() {
                    t.remove()
                })
            }),
            n.removeClass("lity-loading").find(".lity-content").empty().append(r),
            l = !0,
            r.trigger("lity:ready", [a])
        })
    }
    function l(t, e, i) {
        t.preventDefault ? (t.preventDefault(),
        t = (i = d(this)).data("lity-target") || i.attr("href") || i.attr("src")) : i = d(i);
        var s = new a(t,d.extend({}, i.data("lity-options") || i.data("lity"), e),i,v.activeElement);
        if (!t.preventDefault)
            return s
    }
    var v = t.document
      , g = d(t)
      , y = d.Deferred
      , w = d("html")
      , k = []
      , b = "aria-hidden"
      , C = "lity-" + b
      , c = 'a[href],area[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),button:not([disabled]),iframe,object,embed,[contenteditable],[tabindex]:not([tabindex^="-"])'
      , T = {
        esc: !0,
        handler: null,
        handlers: {
            image: e,
            inline: function(t, e) {
                var i, s, o;
                try {
                    i = d(t)
                } catch (t) {
                    return !1
                }
                return !!i.length && (s = d('<i style="display:none !important"/>'),
                o = i.hasClass("lity-hide"),
                e.element().one("lity:remove", function() {
                    s.before(i).remove(),
                    o && !i.closest(".lity-content").length && i.addClass("lity-hide")
                }),
                i.removeClass("lity-hide").after(s))
            },
            youtube: function(t) {
                var e = x.exec(t);
                return !!e && n(o(t, s("https://www.youtube" + (e[2] || "") + ".com/embed/" + e[4], d.extend({
                    autoplay: 1
                }, i(e[5] || "")))))
            },
            vimeo: function(t) {
                var e = E.exec(t);
                return !!e && n(o(t, s("https://player.vimeo.com/video/" + e[3], d.extend({
                    autoplay: 1
                }, i(e[4] || "")))))
            },
            googlemaps: function(t) {
                var e = $.exec(t);
                return !!e && n(o(t, s("https://www.google." + e[3] + "/maps?" + e[6], {
                    output: 0 < e[6].indexOf("layer=c") ? "svembed" : "embed"
                })))
            },
            facebookvideo: function(t) {
                var e = H.exec(t);
                return !!e && (0 !== t.indexOf("http") && (t = "https:" + t),
                n(o(t, s("https://www.facebook.com/plugins/video.php?href=" + t, d.extend({
                    autoplay: 1
                }, i(e[4] || ""))))))
            },
            iframe: n
        },
        template: '<div class="lity" role="dialog" aria-label="Dialog Window (Press escape to close)" tabindex="-1"><div class="lity-wrap" data-lity-close role="document"><div class="lity-loader" aria-hidden="true">Loading...</div><div class="lity-container"><div class="lity-content"></div><button class="lity-close" type="button" aria-label="Close (Press escape to close)" data-lity-close>&times;</button></div></div></div>'
    }
      , S = /(^data:image\/)|(\.(png|jpe?g|gif|svg|webp|bmp|ico|tiff?)(\?\S*)?$)/i
      , x = /(youtube(-nocookie)?\.com|youtu\.be)\/(watch\?v=|v\/|u\/|embed\/?)?([\w-]{11})(.*)?/i
      , E = /(vimeo(pro)?.com)\/(?:[^\d]+)?(\d+)\??(.*)?$/
      , $ = /((maps|www)\.)?google\.([^\/\?]+)\/?((maps\/?)?\?)(.*)/i
      , H = /(facebook\.com)\/([a-z0-9_-]*)\/videos\/([0-9]*)(.*)?$/i
      , A = function() {
        var t = v.createElement("div")
          , e = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var i in e)
            if (void 0 !== t.style[i])
                return e[i];
        return !1
    }();
    return e.test = function(t) {
        return S.test(t)
    }
    ,
    l.version = "2.3.1",
    l.options = d.proxy(p, l, T),
    l.handlers = d.proxy(p, l, T.handlers),
    l.current = r,
    d(v).on("click.lity", "[data-lity]", l),
    l
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? module.exports = e() : t.Headroom = e()
}(this, function() {
    "use strict";
    function t(t) {
        this.callback = t,
        this.ticking = !1
    }
    function i(t, e) {
        e = function t(e) {
            if (arguments.length <= 0)
                throw new Error("Missing arguments in extend function");
            var i, s, o, n = e || {};
            for (s = 1; s < arguments.length; s++) {
                var r = arguments[s] || {};
                for (i in r)
                    "object" != typeof n[i] || (o = n[i]) && "undefined" != typeof window && (o === window || o.nodeType) ? n[i] = n[i] || r[i] : n[i] = t(n[i], r[i])
            }
            return n
        }(e, i.options),
        this.lastKnownScrollY = 0,
        this.elem = t,
        this.tolerance = function(t) {
            return t === Object(t) ? t : {
                down: t,
                up: t
            }
        }(e.tolerance),
        this.classes = e.classes,
        this.offset = e.offset,
        this.scroller = e.scroller,
        this.initialised = !1,
        this.onPin = e.onPin,
        this.onUnpin = e.onUnpin,
        this.onTop = e.onTop,
        this.onNotTop = e.onNotTop,
        this.onBottom = e.onBottom,
        this.onNotBottom = e.onNotBottom
    }
    var e = {
        bind: !!function() {}
        .bind,
        classList: "classList"in document.documentElement,
        rAF: !!(window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame)
    };
    return window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame,
    t.prototype = {
        constructor: t,
        update: function() {
            this.callback && this.callback(),
            this.ticking = !1
        },
        requestTick: function() {
            this.ticking || (requestAnimationFrame(this.rafCallback || (this.rafCallback = this.update.bind(this))),
            this.ticking = !0)
        },
        handleEvent: function() {
            this.requestTick()
        }
    },
    i.prototype = {
        constructor: i,
        init: function() {
            if (i.cutsTheMustard)
                return this.debouncer = new t(this.update.bind(this)),
                this.elem.classList.add(this.classes.initial),
                setTimeout(this.attachEvent.bind(this), 100),
                this
        },
        destroy: function() {
            var t = this.classes;
            for (var e in this.initialised = !1,
            t)
                t.hasOwnProperty(e) && this.elem.classList.remove(t[e]);
            this.scroller.removeEventListener("scroll", this.debouncer, !1)
        },
        attachEvent: function() {
            this.initialised || (this.lastKnownScrollY = this.getScrollY(),
            this.initialised = !0,
            this.scroller.addEventListener("scroll", this.debouncer, !1),
            this.debouncer.handleEvent())
        },
        unpin: function() {
            var t = this.elem.classList
              , e = this.classes;
            !t.contains(e.pinned) && t.contains(e.unpinned) || (t.add(e.unpinned),
            t.remove(e.pinned),
            this.onUnpin && this.onUnpin.call(this))
        },
        pin: function() {
            var t = this.elem.classList
              , e = this.classes;
            t.contains(e.unpinned) && (t.remove(e.unpinned),
            t.add(e.pinned),
            this.onPin && this.onPin.call(this))
        },
        top: function() {
            var t = this.elem.classList
              , e = this.classes;
            t.contains(e.top) || (t.add(e.top),
            t.remove(e.notTop),
            this.onTop && this.onTop.call(this))
        },
        notTop: function() {
            var t = this.elem.classList
              , e = this.classes;
            t.contains(e.notTop) || (t.add(e.notTop),
            t.remove(e.top),
            this.onNotTop && this.onNotTop.call(this))
        },
        bottom: function() {
            var t = this.elem.classList
              , e = this.classes;
            t.contains(e.bottom) || (t.add(e.bottom),
            t.remove(e.notBottom),
            this.onBottom && this.onBottom.call(this))
        },
        notBottom: function() {
            var t = this.elem.classList
              , e = this.classes;
            t.contains(e.notBottom) || (t.add(e.notBottom),
            t.remove(e.bottom),
            this.onNotBottom && this.onNotBottom.call(this))
        },
        getScrollY: function() {
            return void 0 !== this.scroller.pageYOffset ? this.scroller.pageYOffset : void 0 !== this.scroller.scrollTop ? this.scroller.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop
        },
        getViewportHeight: function() {
            return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        },
        getElementPhysicalHeight: function(t) {
            return Math.max(t.offsetHeight, t.clientHeight)
        },
        getScrollerPhysicalHeight: function() {
            return this.scroller === window || this.scroller === document.body ? this.getViewportHeight() : this.getElementPhysicalHeight(this.scroller)
        },
        getDocumentHeight: function() {
            var t = document.body
              , e = document.documentElement;
            return Math.max(t.scrollHeight, e.scrollHeight, t.offsetHeight, e.offsetHeight, t.clientHeight, e.clientHeight)
        },
        getElementHeight: function(t) {
            return Math.max(t.scrollHeight, t.offsetHeight, t.clientHeight)
        },
        getScrollerHeight: function() {
            return this.scroller === window || this.scroller === document.body ? this.getDocumentHeight() : this.getElementHeight(this.scroller)
        },
        isOutOfBounds: function(t) {
            var e = t < 0
              , i = t + this.getScrollerPhysicalHeight() > this.getScrollerHeight();
            return e || i
        },
        toleranceExceeded: function(t, e) {
            return Math.abs(t - this.lastKnownScrollY) >= this.tolerance[e]
        },
        shouldUnpin: function(t, e) {
            var i = t > this.lastKnownScrollY
              , s = t >= this.offset;
            return i && s && e
        },
        shouldPin: function(t, e) {
            var i = t < this.lastKnownScrollY
              , s = t <= this.offset;
            return i && e || s
        },
        update: function() {
            var t = this.getScrollY()
              , e = t > this.lastKnownScrollY ? "down" : "up"
              , i = this.toleranceExceeded(t, e);
            this.isOutOfBounds(t) || (t <= this.offset ? this.top() : this.notTop(),
            t + this.getViewportHeight() >= this.getScrollerHeight() ? this.bottom() : this.notBottom(),
            this.shouldUnpin(t, i) ? this.unpin() : this.shouldPin(t, i) && this.pin(),
            this.lastKnownScrollY = t)
        }
    },
    i.options = {
        tolerance: {
            up: 0,
            down: 0
        },
        offset: 0,
        scroller: window,
        classes: {
            pinned: "headroom--pinned",
            unpinned: "headroom--unpinned",
            top: "headroom--top",
            notTop: "headroom--not-top",
            bottom: "headroom--bottom",
            notBottom: "headroom--not-bottom",
            initial: "headroom"
        }
    },
    i.cutsTheMustard = void 0 !== e && e.rAF && e.bind && e.classList,
    i
}),
function(o) {
    o && (o.fn.headroom = function(s) {
        return this.each(function() {
            var t = o(this)
              , e = t.data("headroom")
              , i = "object" == typeof s && s;
            i = o.extend(!0, {}, Headroom.options, i),
            e || ((e = new Headroom(this,i)).init(),
            t.data("headroom", e)),
            "string" == typeof s && (e[s](),
            "destroy" === s && t.removeData("headroom"))
        })
    }
    ,
    o("[data-headroom]").each(function() {
        var t = o(this);
        t.headroom(t.data())
    }))
}(window.Zepto || window.jQuery);
