;
(function(a, b, c) {
    b[a] = c()
})('T', this, function() {
    
    var T = function(h) {
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
        };
    };
    
    T.prototype = {
        
        get: function() {
            var k = [], n = [];
            k.push(this.getSystemInformation(this.getSystemList()));
            k.push(this.getCanvasFingerprint());
            k.push(this.getWebglInformations());
            k.push(this.hasFontSmoothing());
            k.push(this.getFonts());
            k.push(this.getPropertyCounter([document, window, navigator, screen, history, location]).join(':'));
            k.push(this.getInternetExplorerFonts().join(':'));
            k.push(this.getRegularPlugins());
            
            return k.join('')
        },
        
        getFonts: function() {
            return (new F).getFontList()
        },
        getSystemList: function() {
            return ['postMessage', 'Storage', 'FileReader', 'Worker', 'applicationCache', 'indexedDB', 'WebSocket', 'Geolocation', 'openDatabase', 'WebGLRenderingContext', '(new ActiveXObject("Microsoft.XMLHTTP"))', '(new XMLHttpRequest())', '(new ActiveXObject("Msxml2.XMLHTTP"))', '(new Date).getTimezoneOffset()', 'screen.fontSmoothingEnabled', 'screen.deviceXDPI', 'screen.deviceYDPI', 'screen.logicalXDPI', 'screen.logicalYDPI', 'screen.systemXDPI', 'screen.systemYDPI', 'screen.bufferDepth', 'navigator.appMinorVersion', 'navigator.cpuClass', 'navigator.systemLanguage', 'navigator.browserLanguage', 'navigator.userLanguage', 'window.doNotTrack', 'screen.availHeight', 'screen.availWidth', 'screen.pixelDepth', 'screen.colorDepth', 'navigator.appCodeName', 'navigator.appName', 'navigator.appVersion', 'navigator.userAgent', 'navigator.doNotTrack', 'navigator.onLine', 'navigator.platform', 'navigator.product', 'navigator.productSub', 'navigator.vendor', 'navigator.vendorSub', 'navigator.language', 'navigator.cookieEnabled', 'doNotTrack', 'navigator.oscpu', 'navigator.buildID', 'offscreenBuffering', 'document.defaultCharset', 'styleMedia.type', 'crypto.version', 'clipboardData', 'clientInformation', 'opera.version()', 'opera.buildNumber()', 'locationbar.visible', 'menubar.visible', 'personalbar.visible', 'scrollbars.visible', 'statusbar.visible', 'toolbar.visible', 'navigator.javaEnabled()', 'navigator.taintEnabled()', 'Intl.DateTimeFormat().resolvedOptions().calendar', 'Intl.DateTimeFormat().resolvedOptions().day', 'Intl.DateTimeFormat().resolvedOptions().locale', 'Intl.DateTimeFormat().resolvedOptions().month', 'Intl.DateTimeFormat().resolvedOptions().numberingSystem', 'Intl.DateTimeFormat().resolvedOptions().timeZone', 'Intl.DateTimeFormat().resolvedOptions().year']
        },
        getSystemInformation: function(l) {
            for (var i = 0, c = 0, t = 0, n = [], d = 0; i < l.length; i++, d = n.length) {
                try {
                    c = eval(l[i]);
                    t = typeof c;
                    
                    if (t !== 'undefined')
                        n[d] = t === 'object' || t === 'function' ? true : c.toString();
                    else
                        n[d] = false;
                } 
                catch (e) {
                    n[d] = e.name;
                    continue;
                }
            }
            return n.join(':')
        },
        getPropertyCounter: function(k) {
            
            String.prototype.c = function(n) {
                var r = this.match(new RegExp(n, 'g'));
                
                if (r === null)
                    return
                
                return r.length;
            }
            
            function p(a, b, c) {
                a[a.length] = b.charAt(0);
                return
            }
            
            for (var j = 0, c = 0, n = [], d = k.length; j < d; j++)
                for (var i in k[j])
                    if (typeof k[j][i] !== 'undefined')
                        p(n, typeof k[j][i], c++)
            
            var e = n.join('');
            n = [];
            
            for (var l = ['o', 'n', 's', 'f', 'b'], j = 0; j < l.length; j++)
                n[n.length] = ((typeof e.c(l[j]) !== 'undefined' ? e.c(l[j]) : 0) + l[j]);
            
            return [n.join(''), c]
        },
        getRegularPlugins: function() {
            return (this.map(navigator.plugins, function(p) {
                var b = this.map(p, function(a) {
                    return [a.type, a.suffixes].join('?')
                }).join('?');
                return [p.name, ((typeof (p.version) !== 'undefined') ? p.version : false), p.filename, p.description.replace(/<a href=\".*\">(.*)<\/a>/, '$1'), b].join('?')
            }, this).join('?'))
        },
        getInternetExplorerFonts: function() {
            var k = [];
            var e = document.body.innerHTML;
            document.body.innerHTML = '<object id="_ob" classid="clsid:3050f819-98b5-11cf-bb82-00aa00bdce0b"></object>';
            var d = document.getElementById('_ob');
            
            if (d.fonts) {
                for (var i = 1; i < d.fonts.Count; i++) {
                    k.push(d.fonts(i))
                }
            } else {
                k.push(false)
            }
            
            document.body.innerHTML = e;
            return [k.join(':'), k.length]
        },
        getCanvasFingerprint: function() {
            function atob(a) {
                var b = '', e, c, h = '', f, g = '', d = 0;
                k = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                do
                    e = k.indexOf(a.charAt(d++)), c = k.indexOf(a.charAt(d++)), f = k.indexOf(a.charAt(d++)), g = k.indexOf(a.charAt(d++)), e = e << 2 | c >> 4, c = (c & 15) << 4 | f >> 2, h = (f & 3) << 6 | g, b += String.fromCharCode(e), 64 != f && (b += String.fromCharCode(c)), 64 != g && (b += String.fromCharCode(h));
                while (d < a.length);
                return unescape(b)
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
                var c = a.toDataURL("image/png");
                var b = atob(c.replace("data:image/png;base64,", ""));
                return this.removeElement(a, bin2hex(b.slice(-16, -12)))
            }
            return false
        },
        isCanvasSupported: function() {
            var e = document.createElement('canvas');
            return !!(e.getContext && e.getContext('2d'))
        },
        WebglSupport: function(r) {
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
        },
        getWebglInformations: function() {
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
        },
        hasFontSmoothing: function() {
            var c;
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
                } catch (e) {
                    return
                }
            }
            return this.removeElement(c, false)
        },
        removeElement: function(e, r) {
            if (typeof (e) !== 'undefined')
                document.body.removeChild(e)
            
            return r
        }
    };
    
    return T
});

;
(function(a, b, c) {
    b[a] = c()
})('F', this, function() {
    
    var F = function(h) {
        this.e = ['Serif', 'Monospace', 'Sans-Serif'];
        
        this.h = document.getElementsByTagName("body")[0];
        this.s = document.createElement("span");
        
        this.s.style.fontSize = '32px';
        this.s.innerHTML = "wLLiwLw";
        
        this.i = {};
        this.j = {};
        
        for (var k in this.e) {
            this.s.style.fontFamily = this.e[k];
            this.h.appendChild(this.s);
            this.i[this.e[k]] = this.s.offsetWidth;
            this.j[this.e[k]] = this.s.offsetHeight;
            this.h.removeChild(this.s)
        }
    };
    
    F.prototype = {
        getFontList: function() {
            var fonts = ['Segoe UI', 'Lucida Grande', 'Chicago', 'System', 'Schoko-Cooky', 'Cool jazz', 'Helvetica S', 'Rosemary', 'Wingdings 3', 'cursive', 'monospace', 'serif', 'sans-serif', 'fantasy', 'default', 'Arial', 'Arial Black', 'Arial Narrow', 'Arial Rounded MT Bold', 'Bookman Old Style', 'Bradley Hand ITC', 'Consolas', 'Century', 'Century Gothic', 'Comic Sans MS', 'Courier', 'Courier New', 'Georgia', 'Gentium', 'Impact', 'King', 'Lucida Console', 'Lalit', 'Modena', 'Monotype Corsiva', 'Papyrus', 'Tahoma', 'TeX', 'Times', 'Times New Roman', 'Trebuchet MS', 'Verdana', 'Verona', 'Diogenes', 'CatShop', 'Open Sans', 'Furry', 'Elegant'];
            
            for (var i = 0, l = fonts.length, n = []; i < l; i++)
                n[n.length] = this.trackFonts(fonts[i]).toString().charAt(0);
            
            return n.join('')
        },
        trackFonts: function(a) {
            var b = false;
            for (var c in this.e) {
                this.s.style.fontFamily = a + ',' + this.e[c];
                this.h.appendChild(this.s);
                var d = (this.s.offsetWidth != this.i[this.e[c]] || this.s.offsetHeight != this.j[this.e[c]]);
                this.h.removeChild(this.s);
                b = b || d;
            }
            return b
        }
    };
    
    return F
});
