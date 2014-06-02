// Type definitions for FabricJS
// Project: http://fabricjs.com/
// Definitions by: Oliver Klemencic <https://github.com/oklemencic/>
// DefinitelyTyped: https://github.com/borisyankov/DefinitelyTyped

declare module fabric {

    function createCanvasForNode(width: number, height: number, options?: ICanvasOptions, nodeCanvasOptions?: any): ICanvas;
    function getCSSRules(doc: SVGElement);
    function getGradientDefs(doc: SVGElement);
    function loadSVGFromString(text: string, callback: (results: IObject[], options) => void , reviver?: (el, obj) => void );
    function loadSVGFromURL(url, callback: (results: IObject[], options) => void , reviver?: (el, obj) => void );
    function log(values);
    function parseAttributes(element, attributes: any[]): any;
    function parseElements(elements: any[], callback, options, reviver);
    function parsePointsAttribute(points: string): any[];
    function parseStyleAttribute(element: SVGElement);
    function parseSVGDocument(doc: SVGElement, callback: (results, options) => void , reviver?: (el, obj) => void );
    function parseTransformAttribute(attributeValue: string);
    function warn(values);

    var isLikelyNode: boolean;
    var isTouchSupported: boolean;

    export interface IObservable {
        observe(eventCollection: IEventList);
        on(eventCollection: IEventList);

        observe(eventName: string, handler: (e) => any);
        on(eventName: string, handler: (e) => any);

        stopObserving();
        off();

        stopObserving(eventCollection: IEventList);
        off(eventCollection: IEventList);

        stopObserving(eventName: string, handler: (e) => any);
        off(eventName: string, handler: (e) => any);

        fire(eventName: string, options);
        trigger(eventName: string, options);
    }

    export interface IEventList {
        [index: string]: (e: Event) => void;
    }

    export interface ICollection {
      /**
       * Adds objects to collection, then renders canvas (if `renderOnAddRemove` is not `false`)
       * Objects should be instances of (or inherit from) fabric.Object
       * @param {...fabric.Object} object Zero or more fabric instances
       * @return {Self} thisArg
       */
      add(...objects: IObject[]): ICollection;
      /**
       * Returns number representation of a collection complexity
       * @return {Number} complexity
       */
      complexity(): number;
      /**
       * Returns true if collection contains an object
       * @param {Object} object Object to check against
       * @return {Boolean} `true` if collection contains an object
       */
      contains(object: IObject): boolean;
      /**
       * Executes given function for each object in this group
       * @param {Function} callback
       *                   Callback invoked with current object as first argument,
       *                   index - as second and an array of all objects - as third.
       *                   Iteration happens in reverse order (for performance reasons).
       *                   Callback is invoked in a context of Global Object (e.g. `window`)
       *                   when no `context` argument is given
       *
       * @param {Object} context Context (aka thisObject)
       * @return {Self} thisArg
       */
      forEachObject(callback: (obj: IObject, i: number, all: any[]) => void, thisArg: any): ICollection;
      /**
       * Returns an array of children objects of this instance
       * Type parameter introduced in 1.3.10
       * @param {String} [type] When specified, only objects of this type are returned
       * @return {Array}
       */
      getObjects(type?: string): IObject[];
      /**
       * Inserts an object into collection at specified index, then renders canvas (if `renderOnAddRemove` is not `false`)
       * An object should be an instance of (or inherit from) fabric.Object
       * @param {Object} object Object to insert
       * @param {Number} index Index to insert object at
       * @param {Boolean} nonSplicing When `true`, no splicing (shifting) of objects occurs
       * @return {Self} thisArg
       * @chainable
       */
      insertAt(object: IObject, index: number, nonSplicing: boolean): ICollection;
      /**
       * Returns true if collection contains no objects
       * @return {Boolean} true if collection is empty
       */
      isEmpty(): boolean;
      /**
       * Returns object at specified index
       * @param {Number} index
       * @return {Object} object at specified index.
       */
      item(index: number): IObject;
      /**
       * Removes objects from a collection, then renders canvas (if `renderOnAddRemove` is not `false`)
       * @param {...fabric.Object} object Zero or more fabric instances
       * @return {Self} thisArg
       * @chainable
       */
      remove(...objects: IObject[]): ICollection;
      /**
       * Returns a size of a collection (i.e: length of an array containing its objects)
       * @return {Number} Collection size
       */
      size(): number;
    }

    export interface ICoordinates {
        x: number;
        y: number;
    }

    export interface IControlCoordinatesPoint extends ICoordinates {
        corner: {
            bl: ICoordinates;
            br: ICoordinates;
            tl: ICoordinates;
            tr: ICoordinates;
        }
    }

    export interface IControlCoordinates {
        bl: IControlCoordinatesPoint;
        br: IControlCoordinatesPoint;
        mb: IControlCoordinatesPoint;
        ml: IControlCoordinatesPoint;
        mr: IControlCoordinatesPoint;
        mt: IControlCoordinatesPoint;
        mtr: IControlCoordinatesPoint;
        tl: IControlCoordinatesPoint;
        tr: IControlCoordinatesPoint;
    }

    export interface IObjectOptions {
        angle?: number;
        backgroundColor?: string;
        borderColor?: string;
        borderOpacityWhenMoving?: number;
        borderScaleFactor?: number;
        centeredRotation?: boolean;
        centeredScaling?: boolean;
        clipTo?(clipFunction: (context: CanvasRenderingContext2D) => void );
        cornerColor?: string;
        cornerSize?: number;
        evented?: boolean;
        fill?: string;
        fillRule?: string;
        flipX?: boolean;
        flipY?: boolean;
        hasBorders?: boolean;
        hasControls?: boolean;
        hasRotatingPoint?: boolean;
        height?: number;
        hoverCursor?: string;
        includeDefaultValues?: boolean;
        left?: number;
        lockMovementX?: boolean;
        lockMovementY?: boolean;
        lockRotation?: boolean;
        lockScalingX?: boolean;
        lockScalingY?: boolean;
        lockUniScaling?: boolean;
        minScaleLimit?: number;
        opacity?: number;
        originX?: string;
        originY?: string;
        padding?: number;
        perPixelTargetFind?: boolean;
        rotatingPointOffset?: number;
        scaleX?: number;
        scaleY?: number;
        selectable?: boolean;
        shadow?: IShadow;
        stateProperties?: string[];
        stroke?: string;
        strokeDashArray?: any[];
        strokeLineCap?: string;
        strokeLineJoin?: string;
        strokeMiterLimit?: number;
        strokeWidth?: number;
        top?: number;
        transformMatrix?: any[];
        transparentCorners?: boolean;
        type?: string;
        visible?: boolean;
        width?: number;
    }

    export interface ITextOptions extends IObjectOptions {
        fontSize?: number;
        fontWeight?: any;
        fontFamily?: string;
        textDecoration?: string;
        textAlign?: string;
        fontStyle?: string;
        lineHeight?: number;
        textBackgroundColor?: string;
        path?: string;
        type?: string;
        useNative?: Boolean;
    }

    export interface ICircleOptions extends IObjectOptions {
        radius?: number;
    }

    export interface IEllipseOptions extends IObjectOptions {
        rx?: number;
        ry?: number;
    }

    export interface IImageOptions extends IObjectOptions {
      crossOrigin?: string;
      filters?: any[];
    }

    export interface IPoint {
        add(that: IPoint): IPoint;
        addEquals(that: IPoint): IPoint;
        distanceFrom(that: IPoint): number;
        divide(scalar: number): IPoint;
        divideEquals(scalar: number): IPoint;
        eq(that: IPoint): boolean;
        gt(that: IPoint): boolean;
        gte(that: IPoint): boolean;
        lerp(that: IPoint, t: number): IPoint;
        lt(that: IPoint): boolean;
        lte(that: IPoint): boolean;
        max(that: IPoint): IPoint;
        min(that: IPoint): IPoint;
        multiply(scalar: number): IPoint;
        multiplyEquals(scalar: number): IPoint;
        scalarAdd(scalar: number): IPoint;
        scalarAddEquals(scalar: number, thisArg: IPoint);
        scalarSubtract(scalar: number): IPoint;
        scalarSubtractEquals(scalar: number): IPoint;
        setFromPoint(that: IPoint);
        setXY(x: number, y: number);
        subtract(that: IPoint): IPoint;
        subtractEquals(that: IPoint): IPoint;
        swap(that: IPoint);
        toString(): string;
    }

    export interface IRect extends IObject {
        x: number;
        y: number;
        rx: number;
        ry: number;

        initialize(options: IRectOptions): IRect;
        initialize(points: number[], options: IRectOptions): IRect;
        toSVG(reviver?: (svg: string) => void): string;
    }

    export interface IText extends IObject {
        fontFamily: string;
        getFontFamily(): string;
        setFontFamily(value: string): IText;

        fontSize: number;
        getFontSize(): number;
        setFontSize(value: number): IText;

        fontStyle: string;
        getFontStyle(): string;
        setFontStyle(value: string): IText;

        fontWeight: any;
        getFontWeight(): any;
        setFontWeight(value: any): IText;

        lineHeight: number;
        getLineHeight(): number;
        setLineHeight(value: number): IText;

        path?: string;

        text: string;
        getText(): string;
        setText(value: string): IText;

        textAlign: string;
        getTextAlign(): string;
        setTextAlign(value: string): IText;

        textBackgroundColor: string;
        getTextBackgroundColor(): string;
        setTextBackgroundColor(value: string): IText;

        textDecoration: string;
        getTextDecoration(): string;
        setTextDecoration(value: string): IText;

        type: string;
        useNative: boolean;

        _initDimensions();
        initialize(options: ITextOptions): IText;
        initialize(text: string, options: ITextOptions): IText;
        toString(): string;
        render(ctx: CanvasRenderingContext2D, noTransform: boolean);
        toSVG(reviver?: (svg: string) => void): string;
    }

    export interface ITriangle extends IObject {
        initialize(options: ITriangleOptions): ITriangle;
        toSVG(reviver?: (svg: string) => void): string;
    }

    export interface IEllipse extends IObject {
        rx: number;
        ry: number;

        initialize(options: IEllipseOptions): IEllipse;
        toSVG(reviver?: (svg: string) => void): string;
    }

    export interface IGradient {
        initialize(options): any;
        toObject(): any;
        toLiveGradient(ctx: CanvasRenderingContext2D): any;
    }

    export interface IColor {
        getSource(): any[];
        setSource(source: any[]): any;
        toRgb(): string;
        toRgba(): string;
        toHex(): string;
        getAlpha(): number;
        setAlpha(alpha: number): IColor;
        toGrayscale(): IColor;
        toBlackWhite(threshold): IColor;
        overlayWith(otherColor: string): IColor;
        overlayWith(otherColor: IColor): IColor;
    }

    export interface IElement {
    }

    export interface IPattern {
        (options?: {
            source: any;
            offsetY: number;
            offsetX: number;
            repeat: string;
        }): IPattern;

        // fields
        source: any;
        offsetY: number;
        offsetX: number;
        repeat: string;

        toLive(ctx: CanvasRenderingContext2D): CanvasPattern;
        toObject(): any;
        toSVG(object: IObject): string;
    }

    /**
     * Root object class from which all 2d shape classes inherit from
     * @class fabric.Object
     * @tutorial {@link http://fabricjs.com/fabric-intro-part-1/#objects}
     * @see {@link fabric.Object#initialize} for constructor definition
     *
     * @fires added
     * @fires removed
     *
     * @fires selected
     * @fires modified
     * @fires rotating
     * @fires scaling
     * @fires moving
     *
     * @fires mousedown
     * @fires mouseup
     */
    export interface IObject extends IObservable {

        // constraint properties
        /**
         * When `true`, object horizontal movement is locked
         * @type Boolean
         * @default
         */
        lockMovementX: boolean;
        /**
         * When `true`, object vertical movement is locked
         * @type Boolean
         * @default
         */
        lockMovementY: boolean;
        /**
         * When `true`, object horizontal scaling is locked
         * @type Boolean
         * @default
         */
        lockScalingX: boolean;
        /**
         * When `true`, object vertical scaling is locked
         * @type Boolean
         * @default
         */
        lockScalingY: boolean;
        /**
         * When `true`, object non-uniform scaling is locked
         * @type Boolean
         * @default
         */
        lockUniScaling: boolean;
        /**
         * When `true`, object rotation is locked
         * @type Boolean
         * @default
         */
        lockRotation: boolean;

        /**
         * Horizontal origin of transformation of an object (one of "left", "right", "center")
         * @type String
         * @default
         */
        originX: string;
        /**
         * Retrieves object's {@link fabric.Object#originX|originX}
         * @return {String} originX value
         */
        getOriginX(): string;
        /**
         * Sets object's {@link fabric.Object#originX|originX}
         * @param {String} value originX value
         * @return {fabric.Object} thisArg
         * @chainable
         */
        setOriginX(value: string): IObject;

        /**
         * Vertical origin of transformation of an object (one of "top", "bottom", "center")
         * @type String
         * @default
         */
        originY: string;
        /**
         * Retrieves object's {@link fabric.Object#originY|originY}
         * @return {String} originY value
         */
        getOriginY(): string;
        /**
         * Sets object's {@link fabric.Object#originY|originY}
         * @param {String} value originY value
         * @return {fabric.Object} thisArg
         * @chainable
         */
        setOriginY(value: string): IObject;

        /**
         * Angle of rotation of an object (in degrees)
         * @type Number
         * @default
         */
        angle: number;
        /**
         * Retrieves object's {@link fabric.Object#angle|angle} (in degrees)
         * @return {Number}
         */
        getAngle(): number;
        /**
         * Sets object's {@link fabric.Object#angle|angle}
         * @param {Number} value Angle value (in degrees)
         * @return {fabric.Object} thisArg
         * @chainable
         */
        setAngle(value: number): IObject;

        /**
         * Background color of an object. Only works with text objects at the moment.
         * @type String
         * @default
         */
        backgroundColor: string;
        getBackgroundColor(): string;
        setBackgroundColor(value: string): IObject;

        /**
         * Color of controlling borders of an object (when it's active)
         * @type String
         * @default
         */
        borderColor: string;
        getBorderColor(): string;
        setBorderColor(value: string): IObject;

        /**
         * Opacity of object's controlling borders when object is active and moving
         * @type Number
         * @default
         */
        borderOpacityWhenMoving: number;
        /**
         * Scale factor of object's controlling borders
         * @type Number
         * @default
         */
        borderScaleFactor: number;
        /**
         * When true, this object will use center point as the origin of transformation
         * when being rotated via the controls.
         * <b>Backwards incompatibility note:</b> This property replaces "centerTransform" (Boolean).
         * @since 1.3.4
         * @type Boolean
         * @default
         */
        centeredRotation: boolean;
        /**
         * When true, this object will use center point as the origin of transformation
         * when being scaled via the controls.
         * <b>Backwards incompatibility note:</b> This property replaces "centerTransform" (Boolean).
         * @since 1.3.4
         * @type Boolean
         * @default
         */
        centeredScaling: boolean;

        /**
         * Function that determines clipping of an object (context is passed as a first argument)
         * Note that context origin is at the object's center point (not left/top corner)
         * @type Function
         */
        clipTo(clipFunction: (context: CanvasRenderingContext2D) => void );
        /**
         * Retrieves object's {@link fabric.Object#clipTo|clipping function}
         * @return {Function}
         */
        getClipTo(): (context: CanvasRenderingContext2D) => void;
        /**
         * Sets object's {@link fabric.Object#clipTo|clipping function}
         * @param {Function} clipTo Clipping function
         * @return {fabric.Object} thisArg
         * @chainable
         */
        setClipTo?(clipFunction: (context: CanvasRenderingContext2D) => void ): IObject;
        /**
         * Color of controlling corners of an object (when it's active)
         * @type String
         * @default
         */
        cornerColor: string;
        /**
         * Size of object's controlling corners (in pixels)
         * @type Number
         * @default
         */
        cornerSize: number;
        /**
         * When set to `false`, an object can not be a target of events. All events propagate through it. Introduced in v1.3.4
         * @type Boolean
         * @default
         */
        evented: boolean;

        fill: string;
        getFill(): string;
        setFill(value: string): IObject;

        fillRule: string;
        getFillRule(): string;
        setFillRule(value: string): IObject;

        flipX: boolean;
        getFlipX(): boolean;
        setFlipX(value: boolean): IObject;

        flipY: boolean;
        getFlipY(): boolean;
        setFlipY(value: boolean): IObject;

        hasBorders: boolean;

        hasControls: boolean;
        hasRotatingPoint: boolean;

        height: number;
        getHeight(): number;
        setHeight(value: number): IObject;

        hoverCursor: string;

        includeDefaultValues: boolean;

        left: number;
        getLeft(): number;
        setLeft(value: number): IObject;

        minScaleLimit: number;

        oCoords: IControlCoordinates;

        opacity: number;
        getOpacity(): number;
        setOpacity(value: number): IObject;

        padding: number;
        perPixelTargetFind: boolean;
        rotatingPointOffset: number;

        scaleX: number;
        getScaleX(): number;
        setScaleX(value: number): IObject;

        scaleY: number;
        getScaleY(): number;
        setScaleY(value: number): IObject;

        selectable: boolean;

        shadow: IShadow;
        getShadow(): IShadow;
        setShadow(options: string): IObject;
        setShadow(options: IShadowOptions): IObject;

        stateProperties: string[];
        stroke: string;
        strokeDashArray: any[];

        strokeLineCap: string;
        getStrokeLineCap(): string;
        setStrokeLineCap(value: string): IObject;

        strokeLineJoin: string;
        getStrokeLineJoin(): string;
        setStrokeLineJoin(value: string): IObject;

        strokeMiterLimit: number;
        getStrokeMiterLimit(): number;
        setStrokeMiterLimit(value: number): IObject;

        strokeWidth: number;
        getStrokeWidth(): number;
        setStrokeWidth(value: number): IObject;

        top: number;
        getTop(): number;
        setTop(value: number): IObject;

        transformMatrix: any[];
        getTransformMatrix(): any[];
        setTransformMatrix(value: any[]): IObject;

        transparentCorners: boolean;
        type: string;

        visible: boolean;
        getVisible(): boolean;
        setVisible(value: boolean): IObject;

        width: number;
        getWidth(): number;
        setWidth(value: number): IObject;

        // methods
        adjustPosition(to: string);
        animate(property: any, value: any, options: {
            onChange?: (value: number) => void;
            onComplete?: () => void;
            from?: number;
            duration?: number;
            easing?: (currentTime, startValue, byValue, duration) => number;
        });
        bringForward(intersecting?: boolean): IObject;
        bringToFront(): IObject;
        center(): IObject;
        centerH(): IObject;
        centerV(): IObject;
        clone(callback?, propertiesToInclude?): IObject;
        cloneAsImage(callback?): IObject;
        complexity(): number;
        containsPoint(point: IPoint): boolean;
        drawBorders(context: CanvasRenderingContext2D): IObject;
        drawControls(context: CanvasRenderingContext2D): IObject;
        fxStraighten(callbacks: { onComplete?: () => void; onChange?: () => void;}): IObject;
        get (property: string): any;
        getBoundingRect(): { left: number; top: number; width: number; height: number; };
        getBoundingRectHeight(): number;
        getBoundingRectWidth(): number;
        getCenterPoint(): IPoint;
        getLocalPointer(e?: Event, pointer?: any): { x: number; y: number; };
        getPointByOrigin(originX: string, originY: string): IPoint;
        getSvgStyles(): string;
        getSvgTransform(): string;
        hasStateChanged(): boolean;
        initialize<TOptions, TShape>(options: TOptions): TShape;
        intersectsWithObject(other: IObject): boolean;
        intersectsWithRect(pointTL: ICoordinates, pointBR: ICoordinates): boolean;
        isContainedWithinObject(other: IObject): boolean;
        isContainedWithinRect(pointTL: ICoordinates, pointBR: ICoordinates): boolean;
        isControlVisible(controlName: string): boolean;
        isType(type: string): boolean;
        moveTo(index: number): IObject;
        remove(): IObject;
        render(ctx: CanvasRenderingContext2D, noTransform: boolean);
        rotate(value: number): IObject;
        saveState(options?: any): IObject;
        scale(value: number): IObject;
        scaleToHeight(value: number): IObject;
        scaleToWidth(value: number): IObject;
        sendBackwards(intersecting?: boolean): IObject;
        sendToBack(): IObject;

        set (properties: IObjectOptions): IObject;
        set (name: string, value: any): IObject;
        setControlsVisibility(options?: {
            bl?: boolean;
            br?: boolean;
            mb?: boolean;
            ml?: boolean;
            mr?: boolean;
            mt?: boolean;
            mtr?: boolean;
            tl?: boolean;
            tr?: boolean;
        }): IObject;
        setControlVisible(controlName: string, visible: boolean): IObject;
        setCoords(): IObject;
        setGradient(property: string, options?: {
            type?: string;
            x1?: number;
            y1?: number;
            x2?: number;
            y2?: number;
            r1?: number;
            r2?: number;
            colorStops?: {
                [index: number]: string
            }
        }): IObject;
        setOptions(options: IObjectOptions);
        setPatternFill(options: {
            source: any;
            repeat?: string;
            offsetX?: number;
            offsetY?: number;
        }): IObject;
        setPositionByOrigin(point: IPoint, originX: string, originY: string);
        setSourcePath(value: string): IObject;
        setupState(): IObject;
        straighten(): IObject;
        toDatalessObject(propertiesToInclude?: any[]): any;
        toDataURL(options?: {
            format?: string;
            quality?: number;
            multiplier?: number;
            left?: number;
            top?: number;
            width?: number;
            height?: number;
        }): string;
        toggle(property): IObject;
        toJSON(propertiesToInclude): string;
        toLocalPoint(point: IPoint, originX: string, originY: string): IPoint;
        toObject(propertiesToInclude?: any[]): any;
        toString(): string;
        transform(ctx: CanvasRenderingContext2D, fromLeft: boolean);
        translateToCenterPoint(point: IPoint, originX: string, originY: string): IPoint;
        translateToOriginPoint(point: IPoint, originX: string, originY: string): IPoint;
    }

    export interface IGroup extends IObject, ICollection {
        addWithUpdate(object: IObject): IGroup;
        destroy(): IGroup;
        hasMoved(): boolean;
        initialize(options: IObjectOptions): IGroup;
        initialize(objects: IObject[], options: IObjectOptions): IGroup;
        remove(object?): IGroup;
        removeWithUpdate(object): IGroup;
        render(ctx, noTransform): void;
        saveCoords(): IGroup;
        setObjectsCoords(): IGroup;
        toSVG(reviver?: (svg: string) => void): string;
    }


    export interface ILine extends IObject {
        x1: number;
        x2: number;
        y1: number;
        y2: number;

        initialize(options: IObjectOptions): ILine;
        initialize(points: number[], options: IObjectOptions): ILine;
        toSVG(reviver?: (svg: string) => void): string;
    }

    export interface IIntersection {
        appendPoint(status: string);
        appendPoints(status: string);
        init(status: string);
    }

    export interface IImage extends IObject {
        crossOrigin: string;
        setCrossOrigin(value: string): IImage;

        filters: IBaseFilter[];

        applyFilters(callback: () => void): IImage;
        getElement(): HTMLImageElement;
        getOriginalSize(): { width: number; height: number; };
        getSrc(): string;
        getSvgSrc(): string;
        initialize(options: IImageOptions): IImage;
        initialize(element: HTMLImageElement, options: IImageOptions): IImage;
        setElement(element): IImage;
        toSVG(reviver?: (svg: string) => void): string;
    }

    export interface ICircle extends IObject {
        // methods
        complexity(): number;
        getRadiusX(): number;
        getRadiusY(): number;
        initialize(options: ICircleOptions): ICircle;
        setRadius(value: number): number;
        toSVG(reviver?: (svg: string) => void): string;
    }



    export interface IPath extends IObject {
        complexity(): number;
        initialize(options: any);
        initialize(path, options);
        render(ctx: CanvasRenderingContext2D, noTransform: boolean);
        toSVG(reviver?: (svg: string) => void): string;
    }

    export interface IPolygon extends IObject {
        complexity(): number;
        initialize(options: any);
        initialize(points, options);
        toSVG(reviver?: (svg: string) => void): string;
    }

    export interface IPolyline extends IObject {
        complexity(): number;
        initialize(options: any);
        initialize(points, options);
        toSVG(reviver?: (svg: string) => void): string;
    }

    export interface IPathGroup extends IObject {
        complexity(): number;
        initialize(options: any);
        initialize(paths, options);
        isSameColor(): boolean;
        render(ctx: CanvasRenderingContext2D);
        toSVG(reviver?: (svg: string) => void): string;
    }

    export interface IStaticCanvas extends IObservable, ICollection {

        // fields
        allowTouchScrolling: boolean;
        backgroundColor: string;
        backgroundImage: IImage;
        clipTo(clipFunction: (context: CanvasRenderingContext2D) => void );
        controlsAboveOverlay: boolean;
        includeDefaultValues: boolean;
        overlayColor: string;
        overlayImage: IImage;
        renderOnAddRemove: boolean;
        stateful: boolean;

        // static
        EMPTY_JSON: string;
        FX_DURATION: number;
        supports(methodName: string): boolean;

        // methods
        bringForward(object: IObject, intersecting?: boolean): ICanvas;
        bringToFront(object: IObject): ICanvas;
        calcOffset(): ICanvas;
        centerObject(object: IObject): ICanvas;
        centerObjectH(object: IObject): ICanvas;
        centerObjectV(object: IObject): ICanvas;
        clear(): ICanvas;
        clearContext(context: CanvasRenderingContext2D): ICanvas;
        clone(callback?: (instance: ICanvas) => void, properties?: any[]);
        cloneWithoutData(callback?: (instance: ICanvas) => void);
        dispose(): ICanvas;
        fxCenterObjectH(object: IObject, callbacks?: {
            onComplete?: () => void;
            onChange?: () => void;
        }): ICanvas;
        fxCenterObjectV(object: IObject, callbacks?: {
            onComplete?: () => void;
            onChange?: () => void;
        }): ICanvas;
        fxRemove(object: IObject, callbacks?: {
            onComplete?: () => void;
            onChange?: () => void;
        }): ICanvas;
        fxStraightenObject(object: IObject): ICanvas;
        getActiveGroup(): IGroup;
        getActiveObject(): IObject;
        getCenter(): IObject;
        getContext(): CanvasRenderingContext2D;
        getElement(): HTMLCanvasElement;
        getHeight(): number;
        getWidth(): number;
        moveTo(object: IObject, index: number): ICanvas;
        onBeforeScaleRotate(target: IObject);
        renderAll(allOnTop?: boolean): ICanvas;
        renderTop(): ICanvas;

        sendBackwards(object: IObject, intersecting?: boolean): ICanvas;
        sendToBack(object: IObject): ICanvas;
        setBackgroundColor(backgroundColor: string, callback: () => void): ICanvas;
        setBackgroundColor(backgroundColor: IPattern, callback: () => void): ICanvas;
        setBackgroundImage(object: IObject, callback: () => void, options?: any): ICanvas;
        setDimensions(object: { width: number; height: number; }): ICanvas;
        setHeight(height: number): ICanvas;
        setOverlayColor(color: string, callback: () => any): ICanvas;
        setOverlayColor(color: IPattern, callback: () => any): ICanvas;
        setOverlayImage(url: string, callback: () => any, options?): ICanvas;
        setWidth(width: number): ICanvas;
        straightenObject(object: IObject): ICanvas;
        toDatalessJSON(propertiesToInclude?: any[]): string;
        toDatalessObject(propertiesToInclude?: any[]): string;
        toDataURL(options: {
            format?: string;
            quality?: number;
            multiplier?: number;
            left?: number;
            top?: number;
            width?: number;
            height?: number;
        }): string;
        toDataURLWithMultiplier(format: string, multiplier: number, quality: number): string;
        toJSON(propertiesToInclude: any[]): string;
        toObject(propertiesToInclude: any[]): any;
        toString(): string;
        toSVG(options?: {
            suppressPreamble?: boolean;
            viewBox?: {
                x?: number;
                y?: number;
                width?: number;
                height?: number;
            };
            encoding?: string;
        }, reviver?: (svg: string) => void): string;
    }

    export interface ICanvas extends IStaticCanvas {

        // constructors
        (element: HTMLCanvasElement, options?: any): ICanvas;
        (element: string, options?: any): ICanvas;

        _objects: IObject[];

        // fields
        centeredRotation: boolean;
        centeredScaling: boolean;
        containerClass: string;
        defaultCursor: string;
        freeDrawingCursor: string;
        hoverCursor: string;
        interactive: boolean;
        moveCursor: string;
        perPixelTargetFind: boolean;
        rotationCursor: string;
        selection: boolean;
        selectionBorderColor: string;
        selectionColor: string;
        selectionDashArray: number[];
        selectionLineWidth: number;
        skipTargetFind: boolean;
        targetFindTolerance: number;
        uniScaleTransform: boolean;

        // methods
        containsPoint(e: Event, target: IObject): boolean;
        deactivateAll(): ICanvas;
        deactivateAllWithDispatch(): ICanvas;
        discardActiveGroup(): ICanvas;
        discardActiveObject(): ICanvas;
        drawControls(ctx: CanvasRenderingContext2D);
        drawDashedLine(ctx: CanvasRenderingContext2D, x: number, y: number, x2: number, y2: number, dashArray: number[]): ICanvas;
        findTarget(e: MouseEvent, skipGroup: boolean): ICanvas;
        getActiveGroup(): IGroup;
        getActiveObject(): IObject;
        getPointer(e): { x: number; y: number; };
        getSelectionContext(): CanvasRenderingContext2D;
        getSelectionElement(): HTMLCanvasElement;
        isTargetTransparent(target: IObject, x: number, y: number): boolean;
        removeListeners();
        setActiveGroup(group: IGroup): ICanvas;
        setActiveObject(object: IObject, e?): ICanvas;

        loadFromJSON(json, callback: () => void, reviver?: () => void): void;
        loadFromDatalessJSON(json, callback: () => void, reviver?: () => void): void;
    }

    export interface IShadowOptions {
        color?: string;
        blur?: number;
        offsetX?: number;
        offsetY?: number;
    }

    export interface IShadow {
        //constructors
        (options?: string): IShadow;
        (options?: IShadowOptions): IShadow;

        //static
        reOffsetsAndBlur: RegExp;

        //fields
        affectStroke: boolean;
        blur: number;
        color: string;
        includeDefaultValues: boolean;
        offsetX: number;
        offsetY: number;
    }

    export interface IBaseFilter {
        new (): IBaseFilter;

        //fields
        type: string;

        //methods
        toJSON(): any;
        toObject(): any;
    }

    export interface IBrightnessFilter extends IBaseFilter {
        applyTo(canvasEl: HTMLCanvasElement);
    }

    export interface IInvertFilter extends IBaseFilter {
        applyTo(canvasEl: HTMLCanvasElement);
    }

    export interface IRemoveWhiteFilter extends IBaseFilter {
        applyTo(canvasEl: HTMLCanvasElement);
    }

    export interface IGrayscaleFilter extends IBaseFilter {
        applyTo(canvasEl: HTMLCanvasElement);
    }

    export interface ISepiaFilter extends IBaseFilter {
        applyTo(canvasEl: HTMLCanvasElement);
    }

    export interface ISepia2Filter extends IBaseFilter {
    }

    export interface INoiseFilter extends IBaseFilter {
        applyTo(canvasEl: HTMLCanvasElement);
    }

    export interface IGradientTransparencyFilter extends IBaseFilter {
        applyTo(canvasEl: HTMLCanvasElement);
    }

    export interface IPixelateFilter extends IBaseFilter {
        applyTo(canvasEl: HTMLCanvasElement);
    }

    export interface IConvoluteFilter extends IBaseFilter {
        new (options: { opaque?: boolean; matrix: number[]; }): IConvoluteFilter;

        applyTo(canvasEl: HTMLCanvasElement);
    }

    export interface ICanvasOptions {
        allowTouchScrolling?: boolean;
        backgroundColor?: string;
        backgroundImage?: IImage;
        centeredRotation?: boolean;
        centeredScaling?: boolean;
        containerClass?: string;
        controlsAboveOverlay?: boolean;
        defaultCursor?: string;
        freeDrawingCursor?: string;
        hoverCursor?: string;
        includeDefaultValues?: boolean;
        interactive?: boolean;
        moveCursor?: string;
        overlayColor?: string;
        overlayImage?: IImage;
        perPixelTargetFind?: boolean;
        renderOnAddRemove?: boolean;
        rotationCursor?: string;
        selection?: boolean;
        selectionBorderColor?: string;
        selectionColor?: string;
        selectionDashArray?: number[];
        selectionLineWidth?: number;
        skipTargetFind?: boolean;
        stateful?: boolean;
        targetFindTolerance?: number;
        uniScaleTransform?: boolean;
    }

    export interface IRectOptions extends IObjectOptions {
        x?: number;
        y?: number;
        rx?: number;
        ry?: number;
    }

    export interface ITriangleOptions extends IObjectOptions {
    }

    var Rect: {
        fromElement(element: SVGElement, options?: IRectOptions): IRect;
        fromObject(object): IRect;
        new (options?: IRectOptions): IRect;
        prototype: any;
    };

    var Triangle: {
        fromObject(object): ITriangle;
        new (options?: ITriangleOptions): ITriangle;
    };

    var Canvas: {
        new (element: HTMLCanvasElement, options?: ICanvasOptions): ICanvas;
        new (element: string, options?: ICanvasOptions): ICanvas;

        EMPTY_JSON: string;
        supports(methodName: string): boolean;
        prototype: any;
    };

    var StaticCanvas: {
        new (element: HTMLCanvasElement, options?: ICanvasOptions): ICanvas;
        new (element: string, options?: ICanvasOptions): ICanvas;

        EMPTY_JSON: string;
        supports(methodName: string): boolean;
        prototype: any;
    };

    var Circle: {
        ATTRIBUTE_NAMES: string[];
        fromElement(element: SVGElement, options: ICircleOptions): ICircle;
        fromObject(object): ICircle;
        new (options?: ICircleOptions): ICircle;
        prototype: any;
    };

    var Ellipse: {
        ATTRIBUTE_NAMES: string[];
        fromElement(element: SVGElement, options: IEllipseOptions): IEllipse;
        fromObject(object): IEllipse;
        new (options?: IEllipseOptions): IEllipse;
    };

    var Group: {
        new (items?: any[], options?: IObjectOptions): IGroup;
    };

    var Line: {
        ATTRIBUTE_NAMES: string[];
        fromElement(element: SVGElement, options: IObjectOptions): ILine;
        fromObject(object): ILine;
        prototype: any;
        new (points: number[], options?: IObjectOptions): ILine;
    };

    var Intersection: {
        intersectLineLine(a1, a2, b1, b2);
        intersectLinePolygon(a1, a2, points);
        intersectPolygonPolygon(points1, points2);
        intersectPolygonRectangle(points, r1, r2);
    };

    var Path: {
        fromElement(element: SVGElement, options): IPath;
        fromObject(object): IPath;
        new (): IPath;
    };

    var PathGroup: {
        fromObject(object): IPathGroup;
        new (): IPathGroup;
        prototype: any;
    };

    var Point: {
        new (x, y): IPoint;
        prototype: any;
    };

    var Object: {
        prototype: any;
    };

    var Polygon: {
        fromObject(object): IPolygon;
        fromElement(element: SVGElement, options): IPolygon;
        new (): IPolygon;
        prototype: any;
    };

    var Polyline: {
        fromObject(object): IPolyline;
        fromElement(element: SVGElement, options): IPolyline;
        new (): IPolyline;
        prototype: any;
    };

    var Text: {
        fromObject(object): IText;
        new (text: string, options?: ITextOptions): IText;
    };

    var Image: {
        ATTRIBUTE_NAMES: string[];
        CSS_CANVAS: string;

        async: boolean;
        fromElement(element: SVGElement, callback: (instance: IImage) => void, options: IImageOptions);
        fromObject(object: any, callback: (instance: IImage) => void);
        fromURL(url: string, callback: (instance: IImage) => void, imgOptions?: IImageOptions);
        new (element: HTMLImageElement, options?: IImageOptions): IImage;
        pngCompression: number;
        prototype: any;

        filters:
            {
                Grayscale: {
                    new (): IGrayscaleFilter;
                };
                Brightness: {
                    new (options?: { brightness: number; }): IBrightnessFilter;
                };
                RemoveWhite: {
                    new (options?: {
                        threshold?: number;
                        distance?: number;
                    }): IRemoveWhiteFilter;
                };
                Invert: {
                    new (): IInvertFilter;
                };
                Sepia: {
                    new (): ISepiaFilter;
                };
                Sepia2: {
                    new (): ISepia2Filter;
                };
                Noise: {
                    new (options?: {
                        noise?: number;
                    }): INoiseFilter;
                };
                GradientTransparency: {
                    new (options?: {
                        threshold?: number;
                    }): IGradientTransparencyFilter;
                };
                Pixelate: {
                    new (options?: {
                        color?: any;
                    }): IPixelateFilter;
                };
                Convolute: {
                    new (options: {
                        opaque?: boolean;
                        matrix: number[];
                    }): IConvoluteFilter;
                };
            };

    };

    var util: {
        addClass(element: HTMLElement, className: string);
        addListener(element, eventName: string, handler);
        animate(options: {
            onChange?: (value: number) => void;
            onComplete?: () => void;
            startValue?: number;
            endValue?: number;
            byValue?: number;
            easing?: (currentTime, startValue, byValue, duration) => number;
            duration?: number;
        });
        createClass(parent, properties);
        degreesToRadians(degrees: number): number;
        ease: {
            easeOutCubic(): number;
            easeInOutCubic(): number;
            easeInQuart(): number;
            easeOutQuart(): number;
            easeInOutQuart(): number;
            easeInQuint(): number;
            easeOutQuint(): number;
            easeInOutQuint(): number;
            easeInSine(): number;
            easeOutSine(): number;
            easeInOutSine(): number;
            easeInExpo(): number;
            easeOutExpo(): number;
            easeInOutExpo(): number;
            easeInCirc(): number;
            easeOutCirc(): number;
            easeInOutCirc(): number;
            easeInElastic(): number;
            easeOutElastic(): number;
            easeInOutElastic(): number;
            easeInBack(): number;
            easeOutBack(): number;
            easeInOutBack(): number;
            easeInBounce(): number;
            easeOutBounce(): number;
            easeInOutBounce(): number;
        }
        falseFunction(): () => boolean;
        getById(id: HTMLElement): HTMLElement;
        getById(id: string): HTMLElement;
        getElementOffset(element): { left: number; top: number; };
        getPointer(event: Event);
        getRandomInt(min: number, max: number);
        getScript(url: string, callback);
        groupSVGElements(elements: any[], options, path?: string);
        loadImage(url, callback, context);
        makeElement(tagName: string, attributes);
        makeElementSelectable(element: HTMLElement);
        makeElementUnselectable(element: HTMLElement);
        object: {
            clone(object: any): any;
            extend(destination: any, source: any): any;
        }
        populateWithProperties(source, destination, properties): any[];
        radiansToDegrees(radians: number): number;
        removeFromArray(array: any[], value);
        removeListener(element: HTMLElement, eventName, handler);
        request(url, options);
        requestAnimFrame(callback, element);
        setStyle(element: HTMLElement, styles);
        string: {
            camelize(str: string): string;
            capitalize(str: string, firstLetterOnly?: boolean): string;
            escapeXml(str: string): string;
        }
        toArray(arrayLike): any[];
        toFixed(number, fractionDigits);
        wrapElement(element: HTMLElement, wrapper, attributes);
    };
}
