(function() {

function Application() {
    this._activeComponents = [];
    this._componentRegistry = [];
    this._componentNameRegistry = {};
}

Application.prototype = {
    /**
        Register component view to element className

        @method registerComponent
        @param name String         Element className
        @param view Backbone.View  View class
    */
    registerComponent : function (name, view) {
        var selector = '.' + name;
        var component = {
            name : name,
            selector : selector,
            view : view
        };

        this._componentRegistry.push(component);
        this._componentNameRegistry[name] = component;
        setTimeout(_.bind(this.bindComponent, this, component), 0);
    },

    /**
        Bind all registered components to DOM

        @method bindAllComponents
    */
    bindAllComponents : function () {
        _.each(this._componentRegistry, _.bind(this.bindComponent, this));
    },

    /**
        Bind component view to DOM element
        If a string is passed, the component configuration will be looked up from the registry

        @method bindComponent
        @param component Object|String  Configuration or name
    */
    bindComponent : function (component) {
        var activeComponents = this._activeComponents;

        if (typeof component === 'string') {
            component = this._componentNameRegistry[component];
        }

        $(component.selector).each(function (i, element) {
            var $element = $(element);
            if ($element.data('view-id')) { return; }

            var view = new component.view({
                el : element
            });

            view._id = activeComponents.push(view);
            $element.data('view-id', view._id);
        });
    },

    handleExternalLinks: function () {
        $('a').each(function() {
            var a = new RegExp('/' + window.location.host + '/');

            if (!a.test(this.href)) {
                $(this).on('click', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(this.href, '_blank');
                });
            }
        });
    }
};

window.App = new Application();
App.window = $(window);
App.document = $(document);
App.handleExternalLinks();

if (App.window.width() > 1024) {
    App.wow = (new WOW({
                    boxClass: 'animate',
                    offset: 80,
                    mobile: false
                })).init();
}


})();

(function() {

/*global NodePoint:true, THREE */

NodePoint = (function () {
    return function NodePoint (material) {
        return new THREE.Sprite(material);
    };
})();

NodePoint.prototype = Object.create(Object);
NodePoint.prototype.constructor = NodePoint;


})();


(function() {

PointTrio = function () {
    var width = 1;
    var height = 1;
    var group = new THREE.Object3D();
    group.position.x = (Math.random() * 2 - 1);
    group.position.y = Math.random() * 2 - 1;
    group.position.z = Math.random() * 2 - 1;
    group.position.normalize();
    group.position.multiplyScalar( Math.random() * 10 + 250 );
    group.scale.multiplyScalar( 10 );
    group.position.z = -2;
    //var closed = Math.random();
    var closed = 1;
    group.directionX = Math.random();
    if (group.directionX < 0.5) {
        group.directionX = -1;
    } else {
        group.directionX = 1;
    }
    group.directionY = Math.random();
    if (group.directionY < 0.5) {
        group.directionY = -1;
    } else {
        group.directionY = 1;
    }
    group.vX = Math.random() / 10  * group.directionX;
    group.vY = Math.random() / 10 * group.directionY;
    group.vRotX = Math.random() / 200;// 0.005;
    group.vRotY = Math.random() / 200;//0.007;
    group.vRotZ = Math.random() / 200;//0.003;
    group.opacityOffset = Math.random() * 3.14;
    var lineMaterial = new THREE.LineBasicMaterial({color: '#28cdbd', opacity:0, transparent:true});
    var trianlgeLineGeometry = new THREE.Geometry();
    //var type = Math.round(Math.random() * 2) + 2;
    var type = 3;
    for (var i = 0; i<type; i++) {
        var particle = new NodePoint( );
        particle.material.useScreenCoordinates = true;
        particle.material.opacity = 0;
        particle.position.x = (Math.random() * 2 - 1);
        particle.position.y = Math.random() * 2 - 1;
        particle.position.z = -1;
        particle.position.normalize();
        particle.position.multiplyScalar( Math.random() * 12 );
        particle.scale.multiplyScalar( 2 );
        particle.scale.set( width, height, 1 );

        trianlgeLineGeometry.vertices.push(particle.position);
        if(i === 2 && closed > 0.5) {
            trianlgeLineGeometry.vertices.push(trianlgeLineGeometry.vertices[0]);
        }
        group.add(particle);
    }

    trianlgeLineGeometry.faces.push( new THREE.Face3( 0, 1, 2 ) );
    var object = new THREE.Mesh( trianlgeLineGeometry, new THREE.MeshNormalMaterial({side: THREE.DoubleSide, depthWrite: false, transparent:true, opacity: 0.07}) );
    object.material.depthTest = false;
    object.material.depthWrite = false;
    group.triangle = object;
    group.add(object);
    var trianlgeLine = new THREE.Line( trianlgeLineGeometry, lineMaterial );
    group.add( trianlgeLine );
    this.group = group;
};
PointTrio.constructor = PointTrio;
PointTrio.prototype = Object.create(Object);
})();

(function() {

    WebPoint = function (groupOptions, particleOptions) {

        var color = groupOptions.baseColor || '#ffffff';
        var hoverColor= groupOptions.hoverColor || '#ffffff';

        var material, hoverMaterial, mutedMaterial;

        if( groupOptions.isCV ) {
            material = createCVMats(color, 'rgba(5,118,174,0.2)', 'rgba(5,118,174,0.1)','rgba(5,118,174,0.02)');
            hoverMaterial = createCVMats(color, 'rgba(5,118,174,0.22)','rgba(5,118,174,0.12)','rgba(5,118,174,0.02)');
            mutedMaterial = createCVMats('#28cdbd', 'rgba(5,118,174,0)', 'rgba(5,118,174,0)','rgba(5,118,174,0)');
        } else {
            material = createCVMats(color, 'rgba(255,255,255,0.08)', 'rgba(255,255,255,0.01)','rgba(255,255,255,0)');
            hoverMaterial = createCVMats(hoverColor, 'rgba(255,255,255,0.135)', 'rgba(255,255,255,0.04)','rgba(255,255,255,0.01)');
        }

        var width = 30;
        var height = 30;

        var particle = new NodePoint( material );

        particle.material.useScreenCoordinates = true;
        particle.position.x = (Math.random() * 2 - 1);
        particle.position.y = Math.random() * 2 - 1;
        particle.position.z = Math.random() * 2 - 1;

        particle.position.normalize();
        particle.position.multiplyScalar( Math.random() * 10 + 100 );

        particle.defaultMaterial = material;
        particle.hoverMaterial = hoverMaterial;
        particle.scale.multiplyScalar( 2 );
        particle.scale.set( width, height, 1 );
        particle.startPosition = [particle.position.x, particle.position.y, particle.position.z];

        particle.isParticle = true;
        
        if(groupOptions.extra == false) {
            if (particleOptions) {
                if ( particleOptions.url ) {
                    particle.link = particleOptions.url;
                }
                if ( particleOptions.idx ) {
                    particle.idx = particleOptions.idx;
                }
                if ( particleOptions.cv ) {
                    particle.cv = particleOptions.cv;
                    particle.connections = particleOptions.connections;
                    particle.mutedMaterial = mutedMaterial;
                } else {
                    particle.cVParents = particleOptions.cVParents;
                }
            }
        }

        particle.hovered = false;
        particle.active = false;
        particle.isHome = true;
        particle.outOfBounds = false;
        particle.vx = 0;
        particle.vy = 0;
        particle.vz = 0;
        particle.ax=0;
        particle.ay=0;
        particle.az=0;
        particle.spawnerOptions = {
            horizontalSpeed: Math.random() * 5,
            verticalSpeed: Math.random() * 8,
            timeScale: 0.5
        };

        this.sprite = particle;

        function createCVMats(color, color2, color3, color4) {
            var canvas = document.createElement('canvas');
            canvas.width = 256;
            canvas.height = 256;
            var context = canvas.getContext('2d');
            var gradient = context.createRadialGradient(128,128,128,128,128,0.1);
            gradient.addColorStop(0,'rgba(0,0,0,0)');
            gradient.addColorStop(0.15,color4);
            gradient.addColorStop(0.45,color3);
            gradient.addColorStop(0.96,color2);
            gradient.addColorStop(0.96,color);
            gradient.addColorStop(1,color);
            context.webkitEnableImageSmoothing = false;
            context.mozEnableImageSmoothing = false;
            context.enableImageSmoothing = false;
            context.fillStyle = gradient;
            context.fillRect(0,0,256,256);
            var texture = new THREE.Texture(canvas);
            texture.needsUpdate = true;
            //webGL doesnt support Sprite Canvas Material
            var material = new THREE.SpriteMaterial( { map: texture } );
            return material;
        }
    };

    WebPoint.constructor = WebPoint;
    WebPoint.prototype = Object.create(Object);

})();


(function() {

App = window.App || {};

App.DETECT_IE_MODULE = (function () {
    'use strict';

    /**
     * @description
     * Resolve IE html class.
     *
     * @return {Function}
     * @private
     */
    function _resolveIE () {
        return _detectIE(function (IE) {
            if (IE) {
                $('html').addClass('ie');
            }
        });

        /**
         * @description
         * Check if the current browser is IE.
         *
         * @return {Boolean}
         * @private
         */
        function _detectIE(cb) {
            var ua = window.navigator.userAgent;
            var versions = [
                {
                    type: 'MSIE',
                    fn: _msie
                },
                {
                    type: 'Trident/',
                    fn: _trident
                }
            ];

            var results = [];
            versions.forEach(function (version) {
                var isType = ua.indexOf(version.type);
                var index = version.fn(isType);
                results.push((index > 0) ? 1 : 0);
            });

            return cb(results.indexOf(1) !== -1);

            function _msie (msie) {
                return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
            }

            function _trident (rv) {
                rv = ua.indexOf('rv:');
                return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
            }
        }
    }

    /**
     * @description
     * Init fn.
     *
     * @return void
     * @public
     */
    function init () {
        _resolveIE();
    }

    /**
     * @description
     * DETECT IE module API.
     *
     * @return {Object}
     * @public
     */
    return {
        init: init
    };
})();

$(function () {
    App.DETECT_IE_MODULE.init();
});


})();

(function() {

(function ($, backbone, app) {
    var transitionModule = backbone.View.extend({

        initialize: function () {
            this.$el.addClass('fadeIn');
        },

        /**
         * @description
         * Remove bound DOM events when the view changes.
         *
         * @return void
         * @public
         */
        remove: function () {
            Backbone.View.prototype.remove.call(this);
        },
    });

    app.registerComponent('transition', transitionModule);
})(jQuery, Backbone, App);


})();

(function() {

/*global THREE, Modernizr, fontSpy, WebPoint */
/*jshint maxparams:6, maxdepth:5 */
/*jshint -W030, -W004 */
/*jshint camelcase: false */
//distance based


})();

(function() {

(function ($, backbone, app, THREE) {
    var webModule = backbone.View.extend({

        events: {
            'mousedown': 'onMouseDown',
            'mousemove': 'onMouseMove',
            'mouseleave': 'onMouseLeave',
            'touchstart': 'onTouchStart',
            'touchmove': 'onTouchMove',
            'touchend': 'onTouchEnd'
        },

        initialize: function () {
            var _this = this;
            $('body').addClass('home'); //for 100% height style and footer style on homepage
            window.onunload = function(){}; //prevent firefox from caching so back button causes a refresh

            window.setTimeout(function(){
            	fontSpy('DINNextLTPro-Regular', {
	                success: function() {
	                     _this.loadedInit();
	                },
	                failure: function() {
	                    _this.loadedInit(); //still do init with fallback font
	                }
	            });
            }, 800);
            $('.transition').addClass('loaded');
        },

        loadedInit: function() {
             this.stats = new Stats({mode: 0});
             this.stats.domElement.style.position = 'absolute';
             this.stats.domElement.style.left = '0px';
             this.stats.domElement.style.top = '100px';

          //  document.body.appendChild( this.stats.domElement );
            var _this = this;
            this.hasLoaded = false;
            this.dragOffsetStart = null;
            this.pos = {
                x: 0,
                y: 0
            };
            this.canNodeNavigate = true;
            this.isGrabbing = false; //state: only allow grabbing one item at a time
            this.mouseX = 0;
            this.mouseY = 0;
            this.windowHalfX = window.innerWidth / 2,
            this.windowHalfY = window.innerHeight / 2,
            this.mouse = new THREE.Vector2();
            this.deviceBeta = 0;
            this.deviceGamma = 0;
            this.canHover = true;
            this.tick = 0;
            this.tickRotate = 0;
            var container;
            this.raycaster = new THREE.Raycaster();
            this.extraParticles = 0; // setea los extra
            this.backgroundParticleGroups = 25;
            this.spawnerOptions = {
                horizontalSpeed: 1.5,
                verticalSpeed: 1.33,
                timeScale: 0.2
            };
            container = document.createElement('div');
            $(container).addClass('nodeweb');
            this.$el.prepend(container);
            this.fovOffset = 1;
            if (window.innerWidth < 640) {
                this.isMobile = true;
                this.extraParticles = 5;
                this.fovOffset = 1.2;
            }

            if (window.innerWidth <= 320) {
                this.isSmallMobile = true;
                this.extraParticles = 0;
                this.fovOffset = 1.25;
            }

            if (window.innerWidth < window.innerHeight) {
                this.portrait = true;
                this.fov = 70 * this.fovOffset;
                this.squishY = 1.2;
            } else {
                this.portrait = false;
                this.fov = 42 * this.fovOffset;
                this.squishY = 0.6;
            }

            this.camera = new THREE.PerspectiveCamera( this.fov, window.innerWidth / window.innerHeight, 1, 1000 );
            this.scene = new THREE.Scene();
            this.camera.position.z = 230;
            var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
            if ( webglAvailable() && !isChrome ) {
                this.renderer = new THREE.WebGLRenderer();
                this.isWebGL = true;
             } else {
               this.renderer = new THREE.CanvasRenderer();
            }
            this.renderer.setPixelRatio( window.devicePixelRatio );
            this.renderer.setSize( window.innerWidth, window.innerHeight );
            this.renderer.sortObjects = false;
            this.renderer.setClearColor( 0xFFFFFF, 1 );
            container.appendChild( this.renderer.domElement );

            this.points = [];
            this.textSprites = [];
            this.cvList = [];
            this.linkPoints = [];
            //TODO ...unreliable spacing on canvas for text sprites, hacky fix
            var sets = [
                    {
                        textParams: {
                            fontface: 'DINNextLTPro-Regular',
                            fontsize: 30,
                            backgroundColor: {r: 255, g: 255, b: 255, a: 0},
                            borderThickness: 24,
                            borderColor: {r: 255, g: 255, b: 255, a: 0},
                            textColor: {r: 255, g: 0, b: 0, a:0.9},

                        },
                        baseColor: '#2D324D',
                        scale: 2,
                        points: [
                            {label: '', connections: [],cVParents:[0]},
                            {label: '', connections: [0,1],cVParents:[0]},
                            {label: '', connections: [0,1],cVParents:[0]},
                            {label: '', connections: [1,2],cVParents:[0]},
                            {label: '', connections: [2,3],cVParents:[0]},
                            {label: '', connections: [3,4,5],cVParents:[0]},
                            {label: '', connections: [1,2],cVParents:[0]},
                        ],
                        extra: true
                        //todo update art fashion links
                    },
                ];

            this.textGeometry = new THREE.Geometry();
            this.geometry = new THREE.Geometry();
            this.geometry.verticesNeedUpdate = true;
            this.nodes = new THREE.Object3D();
            this.lines = [];
            this.set = [];

            //  make background floaties
             this.bgExtrasScene = new THREE.Scene();
             this.bgExtrasCam = new THREE.PerspectiveCamera( 42, window.innerWidth / window.innerHeight, 1, 1000 );
             this.bgExtrasCam.position.z = 420;
             this.bgExtrasScene.add(this.bgExtrasCam);
             this.pointTrios = [];
             for (var j = 0; j < this.backgroundParticleGroups; j++) {
                 var pointTrio = new PointTrio();
                 this.pointTrios.push(pointTrio.group);
                 this.bgExtrasScene.add(pointTrio.group);
             }
            //add background image
            //pendiente 1
           // var bgTexture = new THREE.TextureLoader().load( '../static/img/home-background.jpg' );
            var bg = new THREE.Mesh();

            bg.material.depthTest = true;
            bg.material.depthWrite = true;
            bg.material.overdraw = true; //fixes diagonal line
            this.bgScene = new THREE.Scene();
            this.bgCam = new THREE.Camera();
            this.bgScene.add(this.bgCam);
            this.bgScene.add(bg);
            var opacity;
            if (_this.isWebGL) {
                opacity = 0.7;
            } else {
                opacity = 0.7;
            }

            sets.forEach(function(set, idx){
                //create particles with text labels
                _this.set.push( set );
                
                for ( var i = 0; i < set.points.length; i ++ ) {
                    var particle = new WebPoint(set, set.points[i]);
                    if ( !_this.isMobile || set.isCV ) {
                        var defaultText = _this.makeTextSprite(set.points[i].label, set.textParams);
                       // var hoverText = _this.makeTextSprite(set.points[i].label, set.hoverTextParams);

                        if(set.isCV) { //if canvas renderer
                            defaultText.position.y = -0.1;
                          //  hoverText.position.y = -0.1;
                            _this.cvList.push(particle.sprite);
                        } else {
                            defaultText.position.y = -0.05;
                         //   hoverText.position.y = -0.05;
                        }

                        defaultText.position.z = 1;
                       // hoverText.position.z = 1;
                       // hoverText.material.opacity = 0;
                        particle.sprite.add( defaultText );
                      //  particle.sprite.add( hoverText );
                    }

                    _this.geometry.vertices.push( particle.sprite.position );
                    _this.points.push( particle.sprite );
                    _this.linkPoints.push( particle.sprite );
                    particle.sprite.lines = [];
                    _this.nodes.add( particle.sprite );

                    //add lines for each connection
                    for ( var j = 0; j < set.points[i].connections.length; j++ ) {
                        var lineGeometry = new THREE.Geometry();
                        lineGeometry.verticesNeedUpdate = true;
                        lineGeometry.vertices.push(particle.sprite.position);
                        lineGeometry.vertices.push(_this.nodes.children[set.points[i].connections[j]].position);
                        //pendiente
                        var lineMaterial = new THREE.LineBasicMaterial({color: '#2D324D', opacity: opacity});
                        lineMaterial.transparent = true;
                        var line = new THREE.Line( lineGeometry, lineMaterial );
                        line.defaultMaterial = lineMaterial;
                       // line.hoverMaterial = lineHoverMaterial;
                        _this.lines.push( line );
                        _this.scene.add( line );
                        _this.nodes.children[set.points[i].connections[j]].lines.push(line);
                        particle.sprite.lines.push(line);
                    }
                }

            });

            for (var i = 0; i < this.cvList.length; i++ ) {
                var p = this.cvList[i];
                p.material = p.defaultMaterial;
                p.children[0].material.opacity = 0;
                p.children[1].material.opacity = 1;
            }

            //make plane for detecting intersects
            this.plane = this.makePlane();
            this.nodes.add( this.plane );
            this.scene.add( this.nodes );

            //makeExtraParticles
            //pendiente extra
            var lineMaterial = new THREE.LineBasicMaterial({color: 'red', opacity: opacity, transparent:true});
            this.extraLineGeometry = new THREE.Geometry();
            for ( var i = 0; i < this.extraParticles; i ++ ) {
                var particle = new WebPoint({scale:1});
                particle.sprite.material.opacity = 0.4;
                particle.sprite.isExtra = true;
                _this.geometry.vertices.push( particle.sprite.position );
                _this.points.push( particle.sprite );
                _this.nodes.add( particle.sprite );
                this.extraLineGeometry.vertices.push(particle.sprite.position);
            }
            //add line through extra particles
            var extraLine = new THREE.Line( this.extraLineGeometry, lineMaterial );
             _this.scene.add( extraLine );

            $( window ).on( 'resize', _this.onWindowResize.bind( _this ) );
            this.$( '.feat-link' ).on( 'click', _this.navigate.bind( _this ) );
            this.$( '.feat-link' ).on( 'touchend', _this.navigate.bind( _this ) );
            this.$( '.feat-link' ).on( 'mouseenter', _this.blockNodeNavigation.bind( _this ) );
            this.$( '.feat-link' ).on( 'mouseleave', _this.enableNodeNavigation.bind( _this ) );
            if (window.DeviceOrientationEvent && Modernizr.touch) {
                this.hasDeviceOrientation = true;
                window.addEventListener('deviceorientation', _this.handleOrientation.bind(_this));
            } else {
                 _this.$el.on( 'click', _this.onClick.bind( _this ) );
            }

            window.setTimeout(function(){
                _this.$el.addClass('hasLoaded');
                for ( var i = 0; i < _this.nodes.children.length; i++ ) {
                    _this.nodes.children[ i ].hovered = false;
                }
                _this.hasLoaded = true;
            }, 100); //TODO better way to start initial animation?

            _this.animate();
        },

        handleOrientation: function (event) {
               this.deviceBeta = event.beta;
               this.deviceGamma = event.gamma;
        },

        onWindowResize: function() {
            this.windowHalfX = window.innerWidth / 2;
            this.windowHalfY = window.innerHeight / 2;
            this.camera.aspect = window.innerWidth / window.innerHeight;

            if (this.windowHalfY < this.windowHalfX) {
                this.camera.fov = 42 * this.fovOffset;
                this.portrait = false;
                this.squishY = 0.6;
                this.plane.geometry.width = 160;
                this.plane.geometry.height = 230;
            } else {
                this.camera.fov = 70 * this.fovOffset;
                this.portrait = true;
                this.squishY = 1.2;
                this.plane.geometry.width = 160;
                this.plane.geometry.height = 230;
            }
            this.camera.updateProjectionMatrix();

            this.renderer.setSize( window.innerWidth, window.innerHeight );
        },

        onMouseDown: function(event) {
            this.dragOffsetStart = ( event.clientX / window.innerWidth ) * 2 - 1;
        },

        onMouseMove: function(event) {
            var _this = this;
            this.mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
            this.mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
            this.hoverEndPos = this.mouse;

            if(this.hoverStartPosX){
                var d = Math.sqrt( (this.hoverStartPosX-this.hoverEndPos.x)*(this.hoverStartPosX-this.hoverEndPos.x) + (this.hoverStartPosY-this.hoverEndPos.y)*(this.hoverStartPosY-this.hoverEndPos.y) );
                if (d > 0.4) {
                    //console.log('dibuja el')
                    this.canHover = false;
                    this.resetHoverStates();
                    window.setTimeout(function(){
                        _this.canHover = true;
                    },750);
                } else {
                    // TODO opacity 1 letras}
                    //console.log('las letras');
                    //console.log(_this);
                    //console.log(this);
                }
            }

            this.mouseX = event.clientX - this.windowHalfX;
            this.mouseY = event.clientY - this.windowHalfY;
            this.isTouching = true;
            if(this.intersectPlane && this.intersectPlane[0]){
                 this.pos = this.intersectPlane[0].point;
            }
        },

        blockNodeNavigation: function() {
            this.canNodeNavigate = false;
        },

        enableNodeNavigation: function() {
            this.canNodeNavigate = true;
        },

        navigate: function (event) {
            if ( event && event.originalEvent.target.dataset.url ){
                this.transitioning = true;
                var link = event.originalEvent.target.dataset.url;
                this.$el.parent().addClass('transitioning');
                window.setTimeout( function() {
                   window.location = link;
                }, 1100);
            } else if ( this.canNodeNavigate && this.intersects.length && this.intersects[0].object.link && Math.abs(this.dragOffsetStart - this.mouse.x)< 0.05 ) {
                if(!this.isMobile || this.grabbedParticle.cv) {
                    this.transitioning = true;
                    var link = this.grabbedParticle.link;
                    this.$el.parent().addClass('transitioning');
                    window.setTimeout( function() {
                        window.location = link;
                    }, 1200);
                }
            }
        },

        onClick: function(event) {

            this.navigate();
            this.canHover = false;
            this.dragOffsetStart = null;
            document.body.style.cursor = 'default';
            this.isGrabbing = false;
            this.isTouching = false;
        },

        onMouseLeave: function() {
            this.dragOffsetStart = null;
            document.body.style.cursor = 'default';
            this.isGrabbing = false;
            //resetHoverStates
            for ( var k = 0; k < this.points.length; k++ ) {
                this.points[k].hovered = false;
                this.points[k].active = false;
                this.points[k].muted = false;
            }
            for ( var l=0; l < this.lines.length; l++ ) {
                this.lines[l].material = this.lines[l].defaultMaterial;
            }
        },

        onTouchStart: function( event ) {
            var event = event.originalEvent;
            if ( event.touches.length >= 1 ) {
                event.preventDefault();
                this.isTouching = true;
                this.mouseX = event.touches[ 0 ].pageX - this.windowHalfX;
                this.mouseY = event.touches[ 0 ].pageY - this.windowHalfY;
                this.mouse.x = ( event.touches[ 0 ].pageX / window.innerWidth ) * 2 - 1;
                this.mouse.y = - ( event.touches[ 0 ].pageY / window.innerHeight ) * 2 + 1;
                this.dragOffsetStart = ( event.touches[ 0 ].pageX / window.innerWidth ) * 2 - 1;
                if(this.intersectPlane && this.intersectPlane[0]){
                     this.pos = this.intersectPlane[0].point;
                }
            }
        },

        onTouchMove: function( event ) {
            var event = event.originalEvent;
            if ( event.touches.length === 1 ) {

                event.preventDefault();
                this.isTouching = true;
                this.mouseX = event.touches[ 0 ].pageX - this.windowHalfX;
                this.mouseY = event.touches[ 0 ].pageY - this.windowHalfY;
                this.mouse.x = ( event.touches[ 0 ].pageX / window.innerWidth ) * 2 - 1;
                this.mouse.y = - ( event.touches[ 0 ].pageY / window.innerHeight ) * 2 + 1;

                if(this.intersectPlane && this.intersectPlane[0]){
                     this.pos = this.intersectPlane[0].point;
                }
            }
        },

        onTouchEnd: function( event ) {
            this.navigate();
            this.canHover = false;
            this.dragOffsetStart = null;
            document.body.style.cursor = 'default';
            this.isGrabbing = false;
            this.isTouching = false;
            //resetHoverStates
            for ( var k = 0; k < this.points.length; k++ ) {
                this.points[k].hovered = false;
                this.points[k].active = false;
                this.points[k].muted = false;
            }
            for ( var l=0; l < this.lines.length; l++ ) {
                this.lines[l].material = this.lines[l].defaultMaterial;
            }

            this.mouseX = 0;
            this.mouseY = 0;
            this.mouse.x = 0;
            this.mouse.y = 0;
            this.resetHoverStates();
            this.canHover = true;
        },

        animate: function() {
            //  this.stats.begin();
            //TODO consolidate timing
            var t = 15;
            var delta = 0.004;
            this.tickLast = this.tick;
            this.tick += delta;
            //constantly update point of mouse-plane intersection not just on mouse move
            if(this.intersectPlane && this.intersectPlane[0]){
                 this.pos = this.intersectPlane[0].point;
            }
            var smallOffset;
            if(this.tick - this.tickLast < 0.1){
                smallOffset = true;
            } else {
                smallOffset = false;
            }
            this.tickRotate += delta;

            if ( this.dragOffsetStart && !this.isMobile) {
                this.tickRotate += (this.mouse.x - this.dragOffsetStart) * 0.05;
            }

            if (this.hasDeviceOrientation) {
                if (this.portrait) {
                    this.tickRotate += this.deviceGamma/500;
                } else {
                    this.tickRotate += this.deviceBeta/500;
                }
            }

            if ( this.tick < 0 ) this.tick = 0;

            var k = -20,
            b = -0.94, springX, damperX, springY, damperY, springZ, damperZ;
            var geomLength = this.geometry.vertices.length;
            for( var i = 0; i < geomLength; i++ ) {
                //movement update
                var p = this.points[i];
                var pX = p.startPosition[0] * Math.cos(this.tickRotate) + p.startPosition[2] * Math.sin(this.tickRotate), //Math.sin(tick * points[i].spawnerOptions.horizontalSpeed) * 10 + points[i].startPosition[0],
                    pY = Math.sin(this.tick * p.spawnerOptions.verticalSpeed) * 12 + p.startPosition[1] * this.squishY ,
                    pZ = p.startPosition[2] * Math.cos(this.tickRotate) - p.startPosition[0] * Math.sin(this.tickRotate);
                this.nodes.mass = 0.1;

                if (this.hasLoaded && smallOffset) { //prevent large bouncey jumps when switching tabs

                    if (this.transitioning) {
                        this.camera.position.z -= 0.12;
                    }

                    if (p.hovered) {
                        springX = k * ( p.position.x - this.pos.x );
                        damperX = b * ( p.vx );
                        p.ax = ( springX + damperX ) / this.nodes.mass;
                        p.vx += p.ax * (t/1000);
                        this.geometry.vertices[i].x += p.vx * (t/1000);

                        springY = k * ( p.position.y - this.pos.y );
                        damperY = b * ( p.vy );
                        p.ay = ( springY + damperY ) / this.nodes.mass;
                        p.vy += p.ay * (t/1000);
                        this.geometry.vertices[i].y += p.vy * (t/1000);

                        springZ = k * ( p.position.z - 65 );
                        damperZ = b * ( p.vz );
                        p.az = ( springZ + damperZ ) / this.nodes.mass;
                        p.vz += p.az * (t/1000);
                        this.geometry.vertices[i].z += p.vz * (t/1000);
                    } else {

                        p.position.z = pZ;

                        springX = k * ( p.position.x - pX );
                        damperX = b * ( p.vx );
                        p.ax = ( springX + damperX ) / this.nodes.mass;
                        p.vx += p.ax * (t/1000);
                        p.position.x += p.vx * (t/1000);

                        springY = k * ( p.position.y - pY );
                        damperY = b * ( p.vy );
                        p.ay = ( springY + damperY ) / this.nodes.mass;
                        p.vy += p.ay * (t/1000);
                        p.position.y += p.vy * (t/1000);
                    }

                } else {
                    p.position.x = pX;
                    p.position.y = pY;
                    p.position.z = pZ;
                }
            }

            this.webGLChecks();
            this.update();
        },

        webGLChecks: function() {
            if ( this.isWebGL ) {
                for( var j = 0; j < this.lines.length; j++ ){
                    this.lines[j].geometry.verticesNeedUpdate = true;
                }
                this.extraLineGeometry.verticesNeedUpdate = true;
            }
        },

        update: function() {

            if(!this.isMobile){
                this.camera.position.x += ( this.mouseX * 0.2 - this.camera.position.x ) * 0.03;
                this.camera.position.y += ( - this.mouseY * 0.3 - this.camera.position.y ) * 0.04;
            } else {
                this.camera.position.y += ( - this.deviceBeta+45 * 0.7 - this.camera.position.y ) * 0.03;
            }
            this.camera.lookAt( this.scene.position );

            if (this.hasLoaded) {
                this.checkHovers();
            }
            requestAnimationFrame( this.animate.bind(this) );
            //render background image
            this.renderer.autoClear = false;
            this.renderer.clear();
            this.renderer.render(this.bgScene, this.bgCam);
            this.renderer.render(this.bgExtrasScene, this.bgExtrasCam);
            //render points
            this.renderer.render( this.scene, this.camera );

        },

        enableHovers: function() {
            this.canHover = true;
        },
        disableHovers: function() {
            this.canHover = false;
            this.resetHoverStates();
        },
        /*checkHovers: function () {
            // update the picking ray with the camera and mouse position
            if (this.canHover) {
                this.raycaster.setFromCamera( this.mouse, this.camera );
                // calculate objects intersecting the picking ray
                this.intersects = this.raycaster.intersectObjects( this.linkPoints );
                this.intersectPlane = this.raycaster.intersectObjects( [this.plane] );
                var intersectLength = this.intersects.length;
                //set hovered of particle and its active connections
                for ( var i = 0; i < intersectLength; i++ ) {
                    var intersect = this.intersects[ i ].object; // intersect es la clave, es el elemento al cual se le hace hover
                    if ( intersect.isParticle && !intersect.isExtra && !this.isGrabbing && this.isTouching ) {
                        intersect.hovered = true;
                        this.hoverStartPosX = this.mouse.x;
                        this.hoverStartPosY = this.mouse.y;
                        this.grabbedParticle = intersect;
                        this.isGrabbing = true;
                        document.body.style.cursor = 'pointer';
                        if (intersect.connections) {
                            //set active connections
                            for (var j=0; j < intersect.connections.length; j++) {
                                this.points[intersect.connections[j]].active = true;
                            }
                            if ( !this.isMobile ) {
                                this.muteOtherCV([intersect.cv]);
                            }
                        }
                    }
                }
            } else {
                this.intersects = this.intersectPlane = [];
            }

            //reset non hover
            if ( this.intersectPlane.length === 0 ) {
                this.resetHoverStates();
            }
        },*/

        
      checkHovers: function() {
        // update the picking ray with the camera and mouse position
        var _this = this;
        if (this.canHover) {
          this.raycaster.setFromCamera(this.mouse, this.camera);
          // calculate objects intersecting the picking ray
          this.intersects = this.raycaster.intersectObjects(this.linkPoints);
          this.intersectPlane = this.raycaster.intersectObjects([this.plane]);
          var intersectLength = this.intersects.length;
          //set hovered of particle and its active connections
          //console.log(intersectLength)
          for (var i = 0; i < intersectLength; i++) {
            var intersect = this.intersects[i].object;
            if (
              intersect.isParticle &&
              !intersect.isExtra &&
              !this.isGrabbing &&
              this.isTouching
            ) {

                var setPrimary = _this.set.filter(function(obj){
                  return obj.extra == false
                });

                if ( setPrimary.length > 0 ) {
                    if( setPrimary[0].extra != true ){

                        var pointHovered = setPrimary[0].points.filter(function(obj){
                            return intersect.idx == obj.idx
                        });

                        if ( pointHovered.length > 0 ) {
                            var newTextParams = {
                              fontface: "DINNextLTPro-Regular",
                              fontsize: 30,
                              backgroundColor: { r: 255, g: 255, b: 255, a: 0 },
                              borderThickness: 24,
                              borderColor: { r: 255, g: 255, b: 255, a: 0 },
                              textColor: { r: 255, g: 0, b: 0, a: 0 }
                            }

                          var newText = _this.makeTextSprite(pointHovered[0].label, newTextParams)
                          intersect.add(newText);

                          intersect.hovered = true;
                          this.hoverStartPosX = this.mouse.x;
                          this.hoverStartPosY = this.mouse.y;
                          this.grabbedParticle = intersect;
                          this.isGrabbing = true;
                          document.body.style.cursor = "pointer";
                          if (intersect.connections) {
                            //set active connections
                            for (var j = 0; j < intersect.connections.length; j++) {
                              this.points[intersect.connections[j]].active = true;
                            }
                            if (!this.isMobile) {
                              this.muteOtherCV([intersect.cv]);
                            }
                          }
                        }
                    }
                }
            }
          }
        } else {
          this.intersects = this.intersectPlane = [];
        }

        //reset non hover
        if (this.intersectPlane.length === 0) {
          this.resetHoverStates();
        }
      },

        muteOtherCV: function(selected) {

            for (var i=0; i < this.cvList.length; i++) {
                if ( selected.indexOf(i+1) < 0 ) {
                    this.cvList[i].muted = true;
                }
            }
        },
        
        // cuando haces hover sobre un nodo deja de entrar en esta funcion
        resetHoverStates: function() {
            document.body.style.cursor = 'default';
            this.isGrabbing = false;

            //console.log( this.points )

            var pointsLength = this.points.length - this.extraParticles;
            //points to default state
            for ( var i = 0; i < pointsLength; i++ ) {
                var p = this.points[i];
                p.hovered = false;
                p.active = false;
                p.muted = false;
                for (var j = 0; j < p.lines.length; j++) {
                    p.lines[j].material =  p.lines[j].defaultMaterial;
                }
            }
        },

        remove: function() {
            var _this = this;
            $(window).off('resize', _this.onWindowResize);
            Backbone.View.prototype.remove.apply(_this, arguments);
        },

        makeTextSprite: function( message, parameters ) {
            if ( parameters === undefined ) parameters = {};
            var fontface = parameters.hasOwnProperty('fontface') ? parameters.fontface : 'Arial';
            var fontsize = parameters.hasOwnProperty('fontsize') ? parameters.fontsize : 20;
            var borderThickness = parameters.hasOwnProperty('borderThickness') ? parameters.borderThickness : 0;
            var borderColor = parameters.hasOwnProperty('borderColor') ?parameters.borderColor : { r:0, g:0, b:0, a:1.0 };
            var backgroundColor = parameters.hasOwnProperty('backgroundColor') ?parameters.backgroundColor : { r:255, g:255, b:255, a:1.0 };
            var textColor = parameters.hasOwnProperty('textColor') ? parameters.textColor : { r:0, g:0, b:0, a:1.0 };

            var canvas = document.createElement('canvas');
            var context = canvas.getContext('2d');
            context.font = fontsize + 'px ' + fontface;
            var metrics = context.measureText( message );
            var textWidth = metrics.width;
            if( parameters.uppercase ){
                message = message.toUpperCase();
            }
            context.fillStyle   = 'rgba(' + backgroundColor.r + ',' + backgroundColor.g + ',' + backgroundColor.b + ',' + backgroundColor.a + ')';
            context.strokeStyle = 'rgba(' + borderColor.r + ',' + borderColor.g + ',' + borderColor.b + ',' + borderColor.a + ')';
            context.lineWidth = borderThickness;
            roundRect(context, borderThickness/2, borderThickness/2, (textWidth + borderThickness) * 1.1, fontsize * 1.2 + borderThickness, 9);
            context.fillStyle = 'rgba('+textColor.r+', '+textColor.g+', '+textColor.b+',' + textColor.a+')';
            context.fillText( message, borderThickness, fontsize + borderThickness);

            var texture = new THREE.Texture(canvas);
            texture.needsUpdate = true;
            var spriteMaterial = new THREE.SpriteMaterial( { map: texture } );
            var sprite = new THREE.Sprite( spriteMaterial );
            //webgl renders font size differently than canvas
            if(this.isWebGL) {
                sprite.scale.set(0.075 * fontsize, 0.0325 * fontsize, 0.1125 * fontsize);
            }
            else {
                sprite.scale.set(1.5 * fontsize, 0.75 * fontsize, 2.25 * fontsize);
            }
            sprite.material.useScreenCoordinates = true;
            this.textSprites.push(sprite);
            return sprite;
        },

        makePlane: function() {
            var width, height;
            if (window.innerWidth <  window.innerHeight) {
                width = 190;
                height = 230;
            } else {
                width = 240;
                height = 150;
            }
            var planeGeometry = new THREE.PlaneGeometry( width, height, 1 );
            var planeMaterial = new THREE.MeshBasicMaterial( {color: 0xffff00, transparent: true, opacity:0, depthWrite: false} );
            var plane = new THREE.Mesh( planeGeometry, planeMaterial );
            plane.position.z = 50;
            return plane;
        }

    });

    function webglAvailable() {
        try {
            var canvas = document.createElement( 'canvas' );
            return !!( window.WebGLRenderingContext && (
                canvas.getContext( 'webgl' ) ||
                canvas.getContext( 'experimental-webgl' ) )
            );
        } catch ( e ) {
            return false;
        }
    }

    function roundRect(ctx, x, y, w, h, r) { ctx.beginPath(); ctx.moveTo(x + r, y); ctx.lineTo(x + w - r, y); ctx.quadraticCurveTo(x + w, y, x + w, y + r); ctx.lineTo(x + w, y + h - r); ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h); ctx.lineTo(x + r, y + h); ctx.quadraticCurveTo(x, y + h, x, y + h - r); ctx.lineTo(x, y + r); ctx.quadraticCurveTo(x, y, x + r, y); ctx.closePath(); ctx.fill(); ctx.stroke(); }

    app.registerComponent('web', webModule);
})(jQuery, Backbone, App, THREE);


})();