var data = [{"id":0,"relativePath":"index.js","deps":[{"mod":"fs","path":""},{"mod":"path","path":""},53,8,12,52,30,19,61,28,27,16,21,24,54,31,{"mod":"semver","path":""},58,{"mod":"fs","path":""},{"mod":"path","path":""},53,8,12,52,30,19,61,28,27,16,21,24,54,31,{"mod":"semver","path":""},58]},{"id":1,"relativePath":"loader.js","deps":[]},{"id":2,"relativePath":"loaders/babel-loader/index.js","deps":[{"mod":"babel-core","path":""}]},{"id":3,"relativePath":"loaders/empty-loader/index.js","deps":[]},{"id":4,"relativePath":"loaders/enjoy-css-loader/index.js","deps":[]},{"id":5,"relativePath":"loaders/enjoy-html-loader/index.js","deps":[{"mod":"babel-core","path":""}]},{"id":6,"relativePath":"loaders/image-loader/index.js","deps":[{"mod":"fs","path":""},{"mod":"path","path":""},64,57,53,52,20,58,{"mod":"images","path":""},{"mod":"fs","path":""},{"mod":"path","path":""},64,57,53,52,20,58,{"mod":"images","path":""}]},{"id":7,"relativePath":"loaders/image-loader/tpl.js","deps":[]},{"id":8,"relativePath":"loaders/index.js","deps":[{"mod":"fs","path":""},{"mod":"path","path":""},9,2,4,5,6,10,3,60,53,{"mod":"fs","path":""},{"mod":"path","path":""},9,2,4,5,6,10,3,60,53]},{"id":9,"relativePath":"loaders/js-loader/index.js","deps":[]},{"id":10,"relativePath":"loaders/json-loader/index.js","deps":[{"mod":"fs","path":""},{"mod":"path","path":""},64,{"mod":"fs","path":""},{"mod":"path","path":""},64]},{"id":11,"relativePath":"loaders/json-loader/tpl.js","deps":[]},{"id":12,"relativePath":"plugins/index.js","deps":[52,53,13,14,52,53,13,14]},{"id":13,"relativePath":"plugins/log-plugin/index.js","deps":[53,53]},{"id":14,"relativePath":"plugins/minify-plugin/index.js","deps":[53,{"mod":"uglify-js","path":""},53,{"mod":"uglify-js","path":""}]},{"id":15,"relativePath":"server/get-deps.js","deps":[{"mod":"fs","path":""},{"mod":"path","path":""},62,{"mod":"fs","path":""},{"mod":"path","path":""},62]},{"id":16,"relativePath":"src/bundle-single/index.js","deps":[{"mod":"fs","path":""},{"mod":"path","path":""},64,56,29,57,26,58,53,20,{"mod":"fs","path":""},{"mod":"path","path":""},64,56,29,57,26,58,53,20]},{"id":17,"relativePath":"src/bundle-single/inner-mod-tpl.js","deps":[]},{"id":18,"relativePath":"src/bundle-single/single-mod-tpl.js","deps":[]},{"id":19,"relativePath":"src/check-package.js","deps":[{"mod":"path","path":""},{"mod":"semver","path":""},53,62,{"mod":"path","path":""},{"mod":"semver","path":""},53,62]},{"id":20,"relativePath":"src/const.js","deps":[]},{"id":21,"relativePath":"src/create-bundle-info/index.js","deps":[{"mod":"fs","path":""},{"mod":"path","path":""},64,52,26,53,57,20,63,62,{"mod":"fs","path":""},{"mod":"path","path":""},64,52,26,53,57,20,63,62]},{"id":22,"relativePath":"src/create-bundle-info/version-tpl.js","deps":[]},{"id":23,"relativePath":"src/create-html/parse.js","deps":[{"mod":"fs","path":""},{"mod":"path","path":""},{"mod":"fs","path":""},{"mod":"path","path":""}]},{"id":24,"relativePath":"src/create-image-sprite/index.js","deps":[{"mod":"fs","path":""},{"mod":"path","path":""},26,53,63,57,20,64,52,{"mod":"fs","path":""},{"mod":"path","path":""},26,53,63,57,20,64,52]},{"id":25,"relativePath":"src/create-image-sprite/tpl.js","deps":[]},{"id":26,"relativePath":"src/create-version.js","deps":[{"mod":"fs","path":""},{"mod":"path","path":""},55,53,62,58,{"mod":"fs","path":""},{"mod":"path","path":""},55,53,62,58]},{"id":27,"relativePath":"src/find-all-single-files.js","deps":[]},{"id":28,"relativePath":"src/load-files.js","deps":[{"mod":"fs","path":""},{"mod":"path","path":""},52,53,56,{"mod":"glob","path":""},{"mod":"fs","path":""},{"mod":"path","path":""},52,53,56,{"mod":"glob","path":""}]},{"id":29,"relativePath":"src/parse-outer-deps.js","deps":[30,59,32,31,53,30,59,32,31,53]},{"id":30,"relativePath":"src/parse-version.js","deps":[53,53]},{"id":31,"relativePath":"src/project-deps.js","deps":[]},{"id":32,"relativePath":"src/warn-version.js","deps":[53,53]},{"id":33,"relativePath":"test/base-package.js","deps":[{"mod":"path","path":""},0,{"mod":"path","path":""},0]},{"id":34,"relativePath":"test/base-parse.js","deps":[{"mod":"path","path":""},23,{"mod":"path","path":""},23]},{"id":35,"relativePath":"test/base/components/calendar/index-css.js","deps":[]},{"id":36,"relativePath":"test/base/components/calendar/index-html.js","deps":[]},{"id":37,"relativePath":"test/base/components/calendar/index.js","deps":[36,35]},{"id":38,"relativePath":"test/base/components/city-selector/index.js","deps":[43]},{"id":39,"relativePath":"test/base/node_modules/aaa/index.js","deps":[]},{"id":40,"relativePath":"test/base/node_modules/bbb/index.js","deps":[]},{"id":41,"relativePath":"test/base/node_modules/ccc/index.js","deps":[]},{"id":42,"relativePath":"test/base/pack.config.js","deps":[{"mod":"path","path":""}]},{"id":43,"relativePath":"test/base/service/common.js","deps":[{"mod":"ccc","path":""}]},{"id":44,"relativePath":"test/base/service/detail.js","deps":[]},{"id":45,"relativePath":"test/base/service/home.js","deps":[{"mod":"aaa","path":""}]},{"id":46,"relativePath":"test/base/service/list.js","deps":[{"mod":"bbb","path":"lib"}]},{"id":47,"relativePath":"test/base/views/detail/index.js","deps":[44,37,{"mod":"babel-polyfill","path":""},44,37,{"mod":"babel-polyfill","path":""}]},{"id":48,"relativePath":"test/base/views/home/index.js","deps":[45,38]},{"id":49,"relativePath":"test/base/views/list/index.js","deps":[46,37]},{"id":50,"relativePath":"test/minsu-deps.js","deps":[15,{"mod":"express","path":""},{"mod":"compression","path":""},{"mod":"mime","path":""},{"mod":"fs","path":""},{"mod":"path","path":""},15,{"mod":"fs","path":""},{"mod":"path","path":""}]},{"id":51,"relativePath":"test/minsu-package.js","deps":[{"mod":"path","path":""},0,{"mod":"path","path":""},0]},{"id":52,"relativePath":"util/async-list.js","deps":[]},{"id":53,"relativePath":"util/console.js","deps":[{"mod":"colors","path":""}]},{"id":54,"relativePath":"util/find-node-modules.js","deps":[{"mod":"fs","path":""},{"mod":"path","path":""},{"mod":"fs","path":""},{"mod":"path","path":""}]},{"id":55,"relativePath":"util/hex.js","deps":[]},{"id":56,"relativePath":"util/js-deps.js","deps":[{"mod":"babel-core","path":""},53,53]},{"id":57,"relativePath":"util/md5.js","deps":[{"mod":"crypto","path":""},{"mod":"crypto","path":""}]},{"id":58,"relativePath":"util/mkdirs.js","deps":[{"mod":"path","path":""},{"mod":"fs","path":""},{"mod":"path","path":""},{"mod":"fs","path":""}]},{"id":59,"relativePath":"util/package-json.js","deps":[{"mod":"path","path":""},54,53,62,{"mod":"path","path":""},54,53,62]},{"id":60,"relativePath":"util/pipe.js","deps":[]},{"id":61,"relativePath":"util/read-entries.js","deps":[{"mod":"path","path":""},{"mod":"glob","path":""},52,{"mod":"path","path":""},{"mod":"glob","path":""},52]},{"id":62,"relativePath":"util/read-json.js","deps":[{"mod":"fs","path":""},53,{"mod":"fs","path":""},53]},{"id":63,"relativePath":"util/sort-json.js","deps":[]},{"id":64,"relativePath":"util/tpl.js","deps":[]}];
var container = document.getElementById("container");
var lineContainer = document.getElementById("lines");
var nodeContainer = document.getElementById("nodes");
var svgns = "http://www.w3.org/2000/svg";

function createNode(text, position){
	text = text.replace(/\/index\.js$/, "").replace(/\.js$/, "");

	var node = document.createElementNS(svgns, "g");
	node.setAttributeNS(null, "opacity", "0");
	node.innerHTML = '<rect x="0" y="0" rx="3" ry="3" width="24" height="24" style="fill:#fff;stroke:#333;stroke-width:0.5;"></rect>\
						<text x="10.5" y="16.5" font-size="12" fill="#333">' + text + '</text>';
	nodeContainer.appendChild(node);

	var textNode = node.getElementsByTagNameNS(svgns, "text")[0];
	var rectNode = node.getElementsByTagNameNS(svgns, "rect")[0];
	var width = +textNode.textLength.baseVal.value.toFixed(1) + 20;
	rectNode.setAttributeNS(null, "width", width);
	node.setAttributeNS(null, "opacity", "1");

	return {
		target: node,
		width: width + 1,
		height: 25,
		x: 0,
		y: 0,
		position: function(position){
			this.target.setAttributeNS(null, "transform", "matrix( 1 0 0 1 " + position.x + " " + position.y + " )");
			this.x = position.x;
			this.y = position.y;
		},
		text: function(text){
			textNode.innerHTML = text;
			var width = +textNode.textLength.baseVal.value.toFixed(1) + 20;
			rectNode.setAttributeNS(null, "width", width);
			this.width = width + 1;
		},
		focus: function(){
			rectNode.style.strokeWidth = 2;
			rectNode.style.stroke = "#f00";
		},
		blur: function(){
			rectNode.style.strokeWidth = 0.5;
			rectNode.style.stroke = "#333";
		}
	};
}

function createLine(node1, node2){
	var path = document.createElementNS(svgns, "path");
	path.setAttributeNS(null, "fill", "none");
	path.setAttributeNS(null, "stroke", "#999");
	path.setAttributeNS(null, "stroke-width", "1");
	path.setAttributeNS(null, "marker-end", "url(#point)");
	function draw(width, color){
		var node1x = node1.x + node1.width / 2;
		var node1y = node1.y + node1.height / 2;
		var node2x = node2.x + node2.width / 2;
		var node2y = node2.y + node2.height / 2;
		var mx = (node1x + node2x) / 2;
		var my = (node1y + node2y) / 2;

		if(node2y <= node1y){
			//console.error("error");
			return {
				refresh: function(){}
			};
		}

		if(node2x >= node1x && node2y >= node1y){
			path.setAttributeNS(null, "d", "M" + [node1x, node1y].join(" ") + "A" + [node2x - node1x, node2y - node1y, 0, 0, 0, node2x, node2y].join(" "));
			//path.setAttributeNS(null, "d", "M" + [node1x, node1y].join(" ") + "A" + [mx - node1x, my - node1y, 0, 0, 0, mx, my].join(" ") + "M" + [mx, my].join(" ") + "A" + [node2x - mx, my - node2y, 0, 0, 1, node2x, node2y].join(" "));
		}else{
			path.setAttributeNS(null, "d", "M" + [node1x, node1y].join(" ") + "A" + [node2x - node1x, node1y - node2y, 0, 0, 1, node2x, node2y].join(" "));
			//path.setAttributeNS(null, "d", "M" + [node1x, node1y].join(" ") + "A" + [mx - node1x, node1y - my, 0, 0, 1, mx, my].join(" ") + "M" + [mx, my].join(" ") + "A" + [node2x - mx, node2y - my, 0, 0, 0, node2x, node2y].join(" "));
		}
		// path.setAttributeNS(null, "d", "M" + [node1x, node1y].join(" ") + "L" + [node2x, node2y].join(" "));

		if(width){
			path.setAttributeNS(null, "stroke-width", width);
		}

		if(color){
			path.setAttributeNS(null, "stroke", color);
		}
	}
	draw();
	lineContainer.appendChild(path);
	return {
		target: path,
		refresh: draw
	};
}

var nodes = data.map(function(item){
	var node = createNode(item.relativePath);
	return {
		info: item,
		node: node
	};
});

// nodes.forEach(function(node){
// 	node.info.deps.forEach(function(dep){
// 		if(typeof dep === "number"){
// 			// nodes[dep].level ++;
// 			if(!nodes[dep].depBys){
// 				nodes[dep].depBys = [];
// 			}
// 			nodes[dep].depBys.push(node.id);
// 		}
// 	});
// });

// var levels = {};
// nodes.forEach(function(node){
// 	var level = node.level;
// 	if(!levels[level]){
// 		levels[level] = [];
// 	}

// 	levels[level].push(node);
// });

// levels = Object.keys(levels).sort(function(a, b){
// 	return a - b;
// }).map(function(level, index){
// 	var _nodes = levels[level];
// 	var x = 0;
// 	_nodes.forEach(function(node){
// 		node.node.position({
// 			x: x,
// 			y: index * 60
// 		});
// 		x += node.node.width + 20;

// 		node.lines = node.info.deps.filter(function(dep){
// 			return typeof dep === "number";
// 		}).map(function(dep){
// 			return createLine(node.node, nodes[dep].node);
// 		});
// 	});
// });


(function setLevel(node){
	if(!node.level){
		node.level = 0;
	}
	node.info.deps.forEach(function(id){
		if(typeof id === "number"){
			nodes[id].level = Math.max(nodes[id].level || 0, node.level + 1);
			setLevel(nodes[id]);
		}
	});
})(nodes[0]);

var levelWidth = [];
var levelCount = {};
var minMargin = 20;
nodes.forEach(function(node){
	if(typeof node.level !== "number"){
		return;
	}
	if(!levelWidth[node.level]){
		levelWidth[node.level] = 0;
	}
	if(!levelCount[node.level]){
		levelCount[node.level] = 0;
	}
	levelWidth[node.level] += node.node.width + minMargin;
	levelCount[node.level] += 1;
});
var maxLevelWidth = Math.max.apply(null, levelWidth) + minMargin;

var levelMargin = {};
for(var level in levelCount){
	levelMargin[level] = ((maxLevelWidth - levelWidth[level]) + levelCount[level] * minMargin) / (levelCount[level] + 1);
}


var levels = {};
nodes.forEach(function(node, index){
	if(typeof node.level !== "number"){
		node.node.position({
			x: 0,
			y: -100
		});

		return;
	}

	var level = node.level;
	if(!levels[level]){
		levels[level] = levelMargin[level];
	}

	node.node.position({
		x: levels[level],
		y: level * 200
	});

	levels[level] += node.node.width + levelMargin[level];

	node.lines = node.info.deps.filter(function(dep){
		return typeof dep === "number";
	}).map(function(dep){
		return createLine(node.node, nodes[dep].node);
	});
});

var currentNode;
nodes.forEach(function(node){
	if(node.lines){
		node.lines.forEach(function(line){
			line.refresh();
		});
		node.node.target.onclick = function(){
			if(currentNode){
				currentNode.node.blur();
				currentNode.lines.forEach(function(line){
					line.refresh(1, "#999");
				});
				currentNode.info.deps.forEach(function(id){
					if(typeof id === "number"){
						nodes[id].node.blur();
					}
				});
			}

			node.node.focus();
			node.lines.forEach(function(line){
				line.refresh(2, "#333");
			});
			node.info.deps.forEach(function(id){
				if(typeof id === "number"){
					nodes[id].node.focus();
				}
			});

			currentNode = node;
		};
	}
});

document.onmousewheel=function(){
	return false;
};

var isDown = false;
var offsetX, offsetY;
document.onmousedown = function(e){
	isDown = true;
	if(container.transform.baseVal.length){
		var current = container.transform.baseVal[0].matrix;
		offsetX = e.clientX - current.e;
		offsetY = e.clientY - current.f;
	}else{
		offsetX = e.clientX;
		offsetY = e.clientY;
	}
	//this.setAttributeNS(null, "pointer-events", "none");
};
document.onmousemove = function(e){
	if(isDown){
		container.setAttributeNS(null, "transform", "translate(" + (e.clientX - offsetX) + "," + (e.clientY - offsetY) + ")");
	}
};
document.onmouseup = function(e){
	isDown = false;
	//this.setAttributeNS(null, "pointer-events", "");
};
