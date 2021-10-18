it("should error loadModule when a cycle with 2 modules is requested", () => {
	expect(require("./loader!./2/a")).toEqual([
		["./b.json", [
			["./a.json", "err: There is a circular build dependency, which makes it impossible to create this module"]
		]]
	]);
});
it("should error loadModule when a cycle with 3 modules is requested", () => {
	expect(require("./loader!./3/a")).toEqual([
		["./b.json", [
			["./c.json", [
				["./a.json", "err: There is a circular build dependency, which makes it impossible to create this module"]
			]]
		]]
	]);
});
it("should error loadModule when requesting itself", () => {
	expect(require("./loader!./1/a")).toEqual([
		["./a.json", "err: There is a circular build dependency, which makes it impossible to create this module"]
	]);
});
