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

    export interface IObject extends IObservable {

        // constraint properties
        lockMovementX: boolean;
        lockMovementY: boolean;
        lockScalingX: boolean;
        lockScalingY: boolean;
        lockScaling: boolean;
        lockUniScaling: boolean;
        lockRotation: boolean;

        getCurrentWidth(): number;
        getCurrentHeight(): number;

        originX: string;
        originY: string;

        angle: number;
        getAngle(): number;
        setAngle(value: number): IObject;

        backgroundColor: string;
        getBackgroundColor(): string;
        setBackgroundColor(value: string): IObject;

        borderColor: string;
        getBorderColor(): string;
        setBorderColor(value: string): IObject;

        borderOpacityWhenMoving: number;
        borderScaleFactor: number;
        getBorderScaleFactor(): number;

        centeredRotation: boolean;
        centeredScaling: boolean;

        clipTo(clipFunction: (context: CanvasRenderingContext2D) => void );
        getClipTo(): (context: CanvasRenderingContext2D) => void;
        setClipTo?(clipFunction: (context: CanvasRenderingContext2D) => void ): IObject;

        cornerColor: string;
        cornerSize: number;

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

    export interface IGroup extends IObject {
        type: string;

        activateAllObjects(): IGroup;
        add(object): IGroup;
        addWithUpdate(object): IGroup;
        complexity(): number;
        contains(object): boolean;
        destroy(): IGroup;
        getObjects(): IObject[];
        hasMoved(): boolean;
        initialize(options: any);
        initialize(objects, options): any;
        item(index): IObject;
        remove(object?): IGroup;
        removeWithUpdate(object): IGroup;
        render(ctx, noTransform): void;
        saveCoords(): IGroup;
        setObjectsCoords(): IGroup;
        size(): number;
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

    export interface IStaticCanvas extends IObservable {

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
        add(...object: IObject[]): ICanvas;
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
        complexity(): number;
        dispose(): ICanvas;
        forEachObject(callback: (object: IObject) => void , context?: CanvasRenderingContext2D): ICanvas;
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
        getObjects(): IObject[];
        getWidth(): number;
        insertAt(object: IObject, index: number, nonSplicing: boolean): ICanvas;
        isEmpty(): boolean;
        item(index: number): IObject;
        moveTo(object: IObject, index: number): ICanvas;
        onBeforeScaleRotate(target: IObject);
        remove(object: IObject): IObject;
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
