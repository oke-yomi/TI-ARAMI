## NOTES

TODO:
1. Set morgan to work only in development mode

ROUTES:



NOTE: 

1. Set 404 page 
app.all('*', (req, res) => {
	res.status(404);

	if (req.accepts('html')) {
		res.sendFile(path.join(__dirname, 'views', '404.html'));
	} else if (req.accepts('json')) {
		res.json({error: '404 Not found'})
	} else {
		res.type('txt').send('404 Not found')
	}
})


// using CORS
const whitelist = [
	"https://www.google.com/",
	"http://127.0.0.1:8000",
	"http://localhost:5000/",
	"https://leetcode.com/",
];
const corsOptions = {
	origin: (origin, callback) => {
		if (whitelist.indexOf(origin) !== -1 || !origin) {
			callback(null, true);
		} else {
			callback(new Error("Not allowed by CORS"));
		}
	},
	optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));