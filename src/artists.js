const modules = Object.entries(import.meta.globEager("./routes/artists/**/*.md"));

const getArtists = () => {
	return modules.map(([file, module]) => {
		const path = file
			.replace("./routes/artists/", "/")
			.replace("index", "")
			.replace(".md", "");

		return {
			path,
			...module.metadata,
		};
	});
};

export { getArtists };