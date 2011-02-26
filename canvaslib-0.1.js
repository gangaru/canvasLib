var canvaslib = function(id) {
	var c = document.getElementById(id);
	if (!c || !c.getContext) {
		return false;
	}

	this.canvas = c.getContext('2d');
	this.canvas.beginPath();
};

canvaslib.prototype = {
	save : function() {
		this.canvas.save();
	},
	restore : function() {
		this.canvas.restore();
	},
	scale : function(x, y) {
		this.canvas.scale(x, y);
		return this;
	},
	rotate : function(angle) {
		this.canvas.rotate(angle);
		return this;
	},

	translate : function(x, y) {
		this.canvas.translate(x, y);
		return this;
	},
	transform : function(a, b, c, d, e, f) {
		this.canvas.transform(a, b, c, d, e, f);
		return this;
	},

	setTransform : function(a, b, c, d, e, f) {
		this.canvas.setTransform(a, b, c, d, e, f);
		return this;
	},

	globalAlpha : function(a) {
		this.canvas.globalAlpha = a;
		return this;
	},

	globalCompositeOperatioin : function(str) {
		switch (str.toLowerCase()) {
		case 'source-atop':
			type = "source-atop";
			break;
		case 'source-in':
			type = "source-in";
			break;
		case 'source-out':
			type = "source-out";
			break;
		case 'destination-atop':
			type = "destination-atop";
			break;
		case 'destination-in':
			type = "destination-in";
			break;
		case 'destination-out':
			type = "destination-out";
			break;
		case 'lighter':
			type = "lighter";
			break;
		case 'copy':
			type = "copy";
			break;
		case 'xor':
			type = "xor";
			break;
		case 'vendorname-operationname':
			type = "vendorName-operationName";
			break;
		case 'source-over':
		default:
			type = "source-over";
			break;
		}
		this.canvas.globalCompositeOperation = type;
		return this;
	},

	strokeStyle : function(color) {
		if (color == "") {
			color = "#000000";
		}
		this.canvas.strokeStyle = color;
		return this;
	},

	fillStyle : function(color) {
		if (color == "") {
			color = "#000000";
		}
		this.canvas.fillStyle = color;
		return this;
	},

	lineWidth : function(w) {
		this.canvas.lineWidth = w;
		return this;
	},

	lineCap : function(str) {
		switch (str.toLowerCase()) {
		case 'round':
			type = 'round';
			break;
		case 'square':
			type = "square";
			break;
		case 'butt':
		default:
			type = "butt";
			break;
		}
		this.canvas.lineCap = type;
		return this;
	},
	lineJoin : function(str) {
		switch (str.toLowerCase()) {
		case 'round':
			type = 'round';
			break;
		case 'bevel':
			type = "bevel";
			break;
		case 'miter':
		default:
			type = "miter";
			break;
		}
		this.canvas.lineJoin = type;
		return this;
	},

	miterLimit : function(a) {
		this.canvas.miterLimit = a;
		return this;
	},

	shadowOffsetX : function(x) {
		this.canvas.shadowOffsetX = x;
		return this;
	},

	shadowOffsetY : function(y) {
		this.canvas.shadowOffsetY = y;
		return this;
	},

	shadowBlur : function(b) {
		this.canvas.shadowBlur = b;
		return this;
	},

	shadowColor : function(color) {
		if (color == "") {
			color = "#000000";
		}
		this.canvas.shadowColor = color;
		return this;
	},

	clearRect : function(x, y, w, h) {
		this.canvas.clearRect(x, y, w, h);
		return this;
	},

	fillRect : function(x, y, w, h) {
		this.canvas.fillRect(x, y, w, h);
		return this;
	},

	strokeRect : function(x, y, w, h) {
		this.canvas.strokeRect(x, y, w, h);
		return this;
	},

	beginPath : function() {
		this.canvas.beginPath();
		return this;
	},

	closePath : function() {
		this.canvas.closePath();
		return this;
	},

	moveTo : function(x, y) {
		this.canvas.moveTo(x, y);
		return this;
	},

	lineTo : function(x, y) {
		this.canvas.lineTo(x, y);
		return this;
	},

	quadraticCurveTo : function(cpx, cpy, x, y) {
		this.canvas.quadraticCurveTo(cpx, cpy, x, y);
		return this;
	},

	bezierCurveTo : function(cp1x, cp1y, cp2x, cp2y, x, y) {
		this.canvas.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
		return this;
	},

	arcTo : function(x1, y1, x2, y2, radius) {
		this.canvas.arcTo(x1, y1, x2, y2, radius);
		return this;
	},

	rect : function(x, y, w, h) {
		this.canvas.rect(x, y, w, h);
		return this;
	},

	arc : function(x, y, r, start, end, ccw) {
		if (ccw) {
			type = true;
		} else {
			type = false;
		}
		this.canvas.arc(x, y, r, start, end, type);
		return this;
	},

	fill : function() {
		this.canvas.fill();
		return this;
	},

	stroke : function() {
		this.canvas.stroke();
		return this;
	},

	clip : function() {
		this.canvas.clip();
		return this;
	},

	font : function(fontname) {
		if (fontname == "") {
			set = "10px sans-serif";
		}
		this.canvas.font = set;
		return this;
	},

	textAlign : function(tmp) {
		switch (tmp.toLowerCase()) {
		case 'end':
			align = "end";
			break;
		case 'left':
			align = 'left';
			break;
		case 'right':
			align = 'right';
			break;
		case 'center':
			align = 'center';
			break;
		case 'start':
		default:
			align = 'start';
			break;
		}
		this.canvas.textAlign = align;
		return this;
	},

	textBaseLine : function(tmp) {
		switch (tmp.toLowerCase()) {
		case 'top':
			valign = "top";
			break;
		case 'hanging':
			valign = 'hanging';
			break;
		case 'middle':
			valign = 'middle';
			break;
		case 'ideographic':
			valign = 'ideographic';
			break;
		case 'bottom':
			valign = 'bottom';
			break;
		case 'alphabetic':
		default:
			valign = 'alphabetic';
			break;
		}
		this.canvas.textBaseLine = valign;
		return this;
	},

	fillText : function(text, x, y, maxWidth) {
		if (maxWidth) {
			this.canvas.fillText(text, x, y, maxWidth);
		} else {
			this.canvas.fillText(text, x, y);
		}
		return this;
	},

	drawImage : function(image) {
		if (arguments.length == 9) {
			this.canvas.drawImage(image, arguments[1], arguments[2],
					arguments[3], arguments[5], arguments[6], arguments[7],
					arguments[8], arguments[9]);
		} else if (arguments.length >= 7) {
			this.canvas.drawImage(image, arguments[1], arguments[2],
					arguments[3], arguments[5], arguments[6], arguments[7]);
		} else if (arguments.length >= 5) {
			this.canvas.drawImage(image, arguments[1], arguments[2],
					arguments[3], arguments[5]);
		} else if (arguments.length >= 3) {
			this.canvas.drawImage(image, arguments[1], arguments[2]);
		}
		return this;
	},

	putImageData : function(image, x, y, dx, dy, dw, dh) {
		this.canvas.putImageData(image, x, y, dx, dy, dw, dh);
		return;
	},

	addColorStop : function(offset, color) {
		this.canvas.addColorStop(offset, color);
		return this;
	},

	// can't chain methods
	//
	// return: object canvasPettern
	createPattern : function(image, r) {
		return this.canvas.createPattern(image, r);
	},

	// return: CanvasGradient
	createLinearGradient : function(x1, y1, x2, y2) {
		this.canvas.createLinearGradient(x1, y1, x2, y2);
		return this;
	},

	// return: CanvasGradient
	createRedialGradient : function(x1, y1, r1, x2, y2, r2) {
		this.canvas.createRedialGradient(x1, y1, r1, x2, y2, r2);
		return this;
	},

	// return: boolean
	isPointInPath : function(x, y) {
		return this.canvas.isPointInPath(x, y);
	},

	// return: boolean
	drawFocusRing : function(element, x, y, tmp) {
		if (tmp) {
			type = true;
		} else {
			type = false;
		}
		return this.canvas.drawFocusRing(element, x, y, type);
	},

	// return: object TextMetrics
	measureText : function(text) {
		return this.canvas.measureText(text);
	},

	// return: object ImageData or false
	createImageData : function() {
		if (argumentslength == 2) {
			return this.canvas.createImageData(arguments[0], arguments[1]);
		} else if (arguments.length == 1) {
			return this.canvas.createImageData(arguments[0]);
		}
		return false;
	},

	// return: object ImageData
	getImageData : function(x, y, w, h) {
		return this.canvas.getImageData(x, y, w, h);
	}
};
