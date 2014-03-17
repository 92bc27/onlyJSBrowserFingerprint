(function(a, b, c) {
    b[a] = c()
})('T', this, function() {
    var T = function() {
        this.each = function(a, b, c) {
            if (a === null) {
                return
            }
            if (Array.prototype.forEach && a.forEach === Array.prototype.forEach) {
                a.forEach(b, c)
            } else if (a.length === +a.length) {
                for (var i = 0, l = a.length; i < l; i++) {
                    if (b.call(c, a[i], i, a) === {})
                        return
                }
            } else {
                for (var d in a) {
                    if (a.hasOwnProperty(d)) {
                        if (b.call(c, a[d], d, a) === {})
                            return
                    }
                }
            }
        };
        this.map = function(d, e, f) {
            var g = [];
            if (d == null)
                return g;
            if (Array.prototype.map && d.map === Array.prototype.map)
                return d.map(e, f);
            this.each(d, function(a, b, c) {
                g[g.length] = e.call(f, a, b, c)
            });
            return g
        }
    };
    T.prototype = {get: function() {
            var k = [], n = [];
            k.push(this.getSystemInformation());
            k.push(this.hasMediaSupport());
            k.push(this.hasXmlHttpRequestSupport());
            k.push(this.getCanvasFingerprint());
            k.push(this.getWebglInformations());
            k.push(this.hasFontSmoothing());
            function isInternetExplorer() {
                var a = navigator.userAgent.toLowerCase();
                return (a.indexOf('msie') != -1) ? parseInt(a.split('msie')[1]) : false
            }
            var i = isInternetExplorer();
            if (i) {
                k.push(this.getInternetExplorerFonts())
            }
            if (i > 10 || !i) {
                k.push(this.getRegularPlugins());
                k.push(this.getSpecialFeatures())
            }
            for (var j = 0; j < k.length; j++) {
                n.push(this.MurmurHashFunction(k[j], 32).toString(16))
            }
            return n.join('')
        },getSystemInformation: function() {
            var j = [(new Date).getTimezoneOffset()];
            var i = [screen.fontSmoothingEnabled, screen.deviceXDPI, screen.deviceYDPI, screen.logicalXDPI, screen.logicalYDPI, screen.systemXDPI, screen.systemYDPI, screen.bufferDepth, navigator.appMinorVersion, navigator.cpuClass, navigator.systemLanguage, navigator.browserLanguage, navigator.userLanguage, window.doNotTrack, screen.availHeight, screen.availWidth, screen.pixelDepth, screen.colorDepth, navigator.appCodeName, navigator.appName, navigator.appVersion, navigator.userAgent, navigator.doNotTrack, navigator.onLine, navigator.platform, navigator.product, navigator.productSub, navigator.vendor, navigator.vendorSub, navigator.language, navigator.cookieEnabled, window.doNotTrack, navigator.oscpu, navigator.buildID, window.offscreenBuffering, document.defaultCharset];
            for (var k = 0; k < i.length; k++) {
                j.push((typeof (i[k]) !== 'undefined') ? i[k] : false)
            }
            return j.join('?')
        },getInternetExplorerPlugins: function() {
            if (window.ActiveXObject) {
                var b = ['ShockwaveFlash.ShockwaveFlash', 'AcroPDF.PDF', 'PDF.PdfCtrl', 'QuickTime.QuickTime', 'SWCtl.SWCtl', 'WMPlayer.OCX', 'AgControl.AgControl', 'Skype.Detection'];
                return this.map(b, function(c) {
                    try {
                        new ActiveXObject(c);
                        return c
                    } catch (e) {
                        return
                    }
                }).join('?')
            }
            return
        },getRegularPlugins: function() {
            return (this.map(navigator.plugins, function(p) {
                var b = this.map(p, function(a) {
                    return [a.type, a.suffixes].join('?')
                }).join('?');
                return [p.name, ((typeof (p.version) !== 'undefined') ? p.version : false), p.filename, p.description.replace(/<a href=\".*\">(.*)<\/a>/, '$1'), b].join('?')
            }, this).join('?'))
        },getInternetExplorerFonts: function() {
            var k = [];
            var d = document.createElement('object');
            d.setAttribute('classid', 'clsid:3050f819-98b5-11cf-bb82-00aa00bdce0b');
            document.body.appendChild(d);
            if (d.fonts) {
                for (var i = 1; i < d.fonts.Count; i++) {
                    k.push(d.fonts(i))
                }
                k.push(d.fonts.Count)
            } else {
                k.push(false)
            }
            return this.removeElement(d, k.join('?'))
        },hasMediaSupport: function() {
            var b = [];
            var a = document.createElement('audio');
            var v = document.createElement('video');
            document.body.appendChild(a);
            document.body.appendChild(v);
            if (!!a.canPlayType) {
                b.push(!!(a.canPlayType('audio/mpeg;').replace(/no/, '')));
                b.push(!!(a.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, '')));
                b.push(!!(a.canPlayType('audio/wav; codecs="1"').replace(/no/, '')));
                b.push(!!(a.canPlayType('audio/mp4; codecs="mp4a.40.2"').replace(/no/, '')))
            } else {
                b.push(false)
            }
            if (!!v.canPlayType) {
                b.push(!!(v.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/no/, '')));
                b.push(!!(v.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/no/, '')));
                b.push(!!(v.canPlayType('video/ogg; codecs="theora"').replace(/no/, '')))
            } else {
                b.push(false)
            }
            this.removeElement(a, null);
            this.removeElement(v, null);
            return b.join('?')
        },hasXmlHttpRequestSupport: function() {
            var x = null;
            try {
                x = new XMLHttpRequest()
            } catch (e) {
                try {
                    x = new ActiveXObject("Microsoft.XMLHTTP")
                } catch (e) {
                    try {
                        x = new ActiveXObject("Msxml2.XMLHTTP")
                    } catch (e) {
                        x = null
                    }
                }
            }
            return !!x !== null
        },getSpecialFeatures: function() {
            var k = [];
            var j = [window.postMessage, EventSource, Storage, FileReader, Worker, navigator.geolocation, window.applicationCache, window.indexedDB, window.WebSocket, window.openDatabase];
            for (var i = 0; i < j.length; i++) {
                k.push(((typeof (j[i]) !== 'undefined') ? true : false))
            }
            return k.join('?')
        },getCanvasFingerprint: function() {
            if (typeof (window.atob) == "undefined") {
                function atob(a) {
                    var b = '', e, c, h = '', f, g = '', d = 0;
                    k = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                    do
                        e = k.indexOf(a.charAt(d++)), c = k.indexOf(a.charAt(d++)), f = k.indexOf(a.charAt(d++)), g = k.indexOf(a.charAt(d++)), e = e << 2 | c >> 4, c = (c & 15) << 4 | f >> 2, h = (f & 3) << 6 | g, b += String.fromCharCode(e), 64 != f && (b += String.fromCharCode(c)), 64 != g && (b += String.fromCharCode(h));
                    while (d < a.length);
                    return unescape(b)
                }
            }
            function bin2hex(a) {
                var b, c, d = '', e;
                a += '';
                b = 0;
                for (c = a.length; b < c; b++)
                    e = a.charCodeAt(b).toString(16), d += 2 > e.length ? "0" + e : e;
                return d
            }
            if (this.isCanvasSupported()) {
                var a = document.createElement("canvas");
                a.width = "200";
                a.height = "100";
                document.body.appendChild(a);
                var i = a.getContext("2d");
                var j = i.createRadialGradient(75, 50, 5, 90, 60, 100);
                j.addColorStop(0, "#FF0000");
                j.addColorStop(1, "#00FF00");
                i.fillStyle = j;
                i.fillRect(10, 10, 150, 80);
                i.beginPath();
                i.arc(95, 30, 10, 0, 2 * Math.PI);
                i.stroke();
                i.beginPath();
                i.arc(95, 50, 20, 0, 2 * Math.PI);
                i.stroke();
                var j = i.createLinearGradient(0, 0, 50, 0);
                j.addColorStop(0, "#0000FF");
                j.addColorStop(1, "#FFFF00");
                i.fillStyle = j;
                i.fillRect(10, 10, 50, 80);
                i.font = "7px 'Arial'";
                i.strokeText("OUndoiHO)():_+/-8790", 20, 90);
                i.font = "13px 'Arial'";
                i.strokeText("#+845(){da-,:", 80, 80);
                i.textBaseline = "top";
                i.font = "14px 'Arial'";
                i.textBaseline = "alphabetic";
                i.fillStyle = "#000000";
                i.fillText("OUndoiHO)():_+/-8790", 2, 15);
                i.fillStyle = "rgba(30,20,30,0.8)";
                i.fillText("OUndoiHO)():_+/-8790", 7, 21);
                c = a.toDataURL("image/png");
                b = atob(c.replace("data:image/png;base64,", ""));
                return this.removeElement(a, bin2hex(b.slice(-16, -12)))
            }
            return false
        },isCanvasSupported: function() {
            var e = document.createElement('canvas');
            return !!(e.getContext && e.getContext('2d'))
        },WebglSupport: function(r) {
            if (!!(window.WebGLRenderingContext) && this.isCanvasSupported()) {
                var s = document.createElement("canvas");
                var n = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"];
                var c = false;
                for (var i = 0; i < 4; i++) {
                    try {
                        c = s.getContext(n[i]);
                        if (c && typeof c.getParameter == "function") {
                            if (r) {
                                return {name: n[i],gl: c}
                            }
                            return true
                        }
                    } catch (e) {
                    }
                }
            }
            return false
        },getWebglInformations: function() {
            var c = this.WebglSupport(1);
            var k = [!!(c) ? c.name : false];
            if (c) {
                var a = c.gl;
                var j = [a.getParameter(a.VERSION), a.getParameter(a.SHADING_LANGUAGE_VERSION), a.getParameter(a.VENDOR), a.getParameter(a.RENDERER)];
                var b = [];
                try {
                    b = a.getSupportedExtensions()
                } catch (e) {
                }
                if (b.length) {
                    for (var i = 0; i < b.length; i++) {
                        j.push(b[i])
                    }
                }
                var m = false;
                var e = a.getExtension("EXT_texture_filter_anisotropic") || a.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || a.getExtension("MOZ_EXT_texture_filter_anisotropic");
                if (e) {
                    m = a.getParameter(e.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                    if (m === 0) {
                        j.push(2)
                    } else {
                        j.push(m)
                    }
                } else {
                    j.push(false)
                }
                k.push(j.join('?'))
            }
            return k.join('?')
        },hasFontSmoothing: function() {
            if (typeof (screen.fontSmoothingEnabled) === "undefined" && this.isCanvasSupported()) {
                try {
                    c = document.createElement("canvas");
                    c.width = "35";
                    c.height = "35";
                    document.body.appendChild(c);
                    var a = c.getContext("2d");
                    a.textBaseline = "top";
                    a.font = "32px Arial";
                    a.fillStyle = "#000000";
                    a.strokeStyle = "#000000";
                    a.fillText("O", 0, 0);
                    for (var j = 8; j <= 32; j++) {
                        for (var i = 1; i <= 32; i++) {
                            var b = a.getImageData(i, j, 1, 1).data;
                            if (b[3] != 255 && b[3] != 0) {
                                return this.removeElement(c, true)
                            }
                        }
                    }
                } catch (ex) {
                }
            }
            return this.removeElement(c, false)
        },MurmurHashFunction: function(e, f) {
            var m = 0x5bd1e995;
            var r = 24;
            var h = f ^ e.length;
            var g = e.length;
            var i = 0;
            while (g >= 4) {
                var k = UInt32(e, i);
                k = Umul32(k, m);
                k ^= k >>> r;
                k = Umul32(k, m);
                h = Umul32(h, m);
                h ^= k;
                i += 4;
                g -= 4
            }
            switch (g) {
                case 3:
                    h ^= UInt16(e, i);
                    h ^= e.charCodeAt(i + 2) << 16;
                    h = Umul32(h, m);
                    break;
                case 2:
                    h ^= UInt16(e, i);
                    h = Umul32(h, m);
                    break;
                case 1:
                    h ^= e.charCodeAt(i);
                    h = Umul32(h, m);
                    break
            }
            h ^= h >>> 13;
            h = Umul32(h, m);
            h ^= h >>> 15;
            return h >>> 0;
            function UInt32(a, b) {
                return (a.charCodeAt(b++)) + (a.charCodeAt(b++) << 8) + (a.charCodeAt(b++) << 16) + (a.charCodeAt(b) << 24)
            }
            function UInt16(a, b) {
                return (a.charCodeAt(b++)) + (a.charCodeAt(b++) << 8)
            }
            function Umul32(n, m) {
                n = n | 0;
                m = m | 0;
                var a = n & 0xffff;
                var b = n >>> 16;
                var c = ((a * m) + (((b * m) & 0xffff) << 16)) | 0;
                return c
            }
            function getBucket(a, b) {
                var c = doHash(a, a.length);
                var d = c % b;
                return d
            }
        },removeElement: function(e, r) {
            if (e) {
                document.body.removeChild(e)
            }
            return r
        }};
    return T
});
