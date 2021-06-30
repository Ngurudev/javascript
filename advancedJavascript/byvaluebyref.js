let obj = {
	a:'a',
	b:'b',
	c:{
		deep: 'copy me!'
	}
};
 let clone = Object.assign({},obj);
 let clone1 = {...obj};
 let superclone = JSON.parse(JSON.stringify(obj));
 obj.c.deep = "hahahaha";
 console.log('iam clone',clone);
 console.log('iam clone1',clone1);
 console.log('iam superclone',superclone);