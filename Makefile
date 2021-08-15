back:
	cd server-backend; npm run dev

front:
	cd server-frontend; npm run start:local

back_install:
	cd server-backend; npm i

front_install:
	cd server-frontend; npm i

front-lint:
	cd server-frontend; npm run lint

back_build:
	cd server-backend; npm run build

front_build:
	cd server-frontend; npm run build

dev: front back

build: back_build front_build

install:
	cd server-backend; npm i
	cd server-frontend; npm i

start: install build
