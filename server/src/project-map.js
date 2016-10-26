/**
 * 一个项目中文件的依赖关系图
 * 根据文件中requie、import关键字进行分析依赖关系
 * 包括npm模块的提取
 */
import fs from "fs";
import path from "path";
import glob from "glob";
import jsDeps from "../utils/js-deps";
import console from "../utils/console";

export default function(projectPath){
	glob("**/*.js", {
		cwd: projectPath,
		ignore: "node_modules/**/*"
	}, function(err, files){
		if(err){
			throw err;
		}

		// Hash<relativePath, mod>
		var modHash = {};
		// List<mod>
		var modList = files.map((relativePath, index) => {
			var mod = {
				id: index,
				// 相对于项目根目录的路径
				relativePath: relativePath,
				// 本地文件路径
				absolutePath: path.join(projectPath, relativePath)
			};

			modHash[mod.relativePath] = mod;

			return mod;
		});

		// Hash<modName, List<path>>
		var outerModHash = {};

		Promise.all(modList.map(mod => new Promise(function(resolve, reject){
			fs.readFile(mod.absolutePath, {
				encoding: "utf8"
			}, function(err, code){
				if(err){
					throw err;
				}

				var deps = mod.deps = [];

				jsDeps(code, mod.relativePath).forEach((dep) => {
					if(/^\.{1,2}\//.test(dep)){
						// 如果是相对路径
						let relativePath = path.join(path.dirname(mod.relativePath), dep);

						if(!/\.js$/.test(relativePath)){
							relativePath += ".js";
						}

						if(!modHash[relativePath]){
							console.warn(`模块${relativePath}没有找到`);
						}else{
							deps.push(modHash[relativePath].id);
						}
					}else{
						// 如果是外部依赖
						dep = dep.split("/");
						let modName = dep.shift();
						let path = dep.join("");

						if(!outerModHash[modName]){
							outerModHash[modName] = {
								modName: modName,
								path: []
							};
						}

						if(path && outerModHash[modName].path.indexOf(path) === -1){
							outerModHash[modName].path.push(path);
						}

						deps.push({
							mod: modName,
							path: path
						});
					}
				});

				resolve();
			});
		}))).then(function(){
			modList.forEach(mod => {
				delete mod.absolutePath;
			});
			
			console.title("modHash");
			console.log(JSON.stringify(modList));
			console.title("outerModHash");
			console.log(JSON.stringify(outerModHash));
		});
	});
};