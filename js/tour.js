AFRAME.registerComponent("tour", {
    schema: {
        state:{ type:"string", default:"place-list" },
        selectIdCard:{type:"string", default: "#card1" }
    },


    init: function () {
        this.placecontainer = this.el
        this.createMyImages()
    },

    tick: function () {
        const { state } = this.el.getAttribute("tour")
        if (state === "view") {
            this.hide1([this.placecontainer])
            this.showView()
        }

    },

    hide1:function (alllist) {
        alllist.map(e=> {
            this.el.setAttribute("visible", false)
        })
    },


    showView: function () {
        const { selectIdCard } = this.data
        const sky1 = document.querySelector("#main-container")
        sky1.setAttribute("material", {
            color: "white"
        })

    },

    createMyImages: function () {
        const thumbnails = [
            {
                id: "taj-mahal",
                title: "TajMahal",
                url: "./assets/thumbnails/taj_mahal.png"
            },

            {
                id: "new-york",
                title: "NewYork City",
                url: "./assets/thumbnails/new_york_city.png"
            },

        ]


        // console.log(thumbnails)
        let perviousXposition = -50
        for (var item of thumbnails) {
            const posX = perviousXposition + 25
            const posY = -5
            const posZ = - 40


            const position = { x: posX, y: posY, z: posZ }
            perviousXposition = posX


            const borders = this.createBorder(position, item.id)

            const images = this.createThumbNails(item)
            borders.appendChild(images)


            const titles = this.createTitle(position, item)
            borders.appendChild(titles)
            this.placecontainer.appendChild(borders)

        }

    },


    createThumbNails: function (item) {
        const entity1 = document.createElement("a-entity")

        entity1.setAttribute("visible", true)
        entity1.setAttribute("geometry", {
            primitive: "circle",
            radius: 9
        })

        entity1.setAttribute("material", {
            src: item.url
        })

        return entity1


    },

    createBorder: function (position, id) {
        const entity1 = document.createElement("a-entity")
        entity1.setAttribute("id", id);

        entity1.setAttribute("visible", true)
        entity1.setAttribute("geometry", {
            primitive: "ring",
            radiusInner: 9,
            radiusOuter: 10
        })
        entity1.setAttribute("position", position)
        entity1.setAttribute("material", {
            color: "red",
            opacity: 1,
        })

    //   //Add cursor-listener component to the ring border entity to change it's color 
    //On Cursor 'mouseenter' and 'mouseleave' entity
    
        entity1.setAttribute("cursor-event", {})
        return entity1
    },



    createTitle: function (position, item) {
        const entity1 = document.createElement("a-entity");
        entity1.setAttribute("text", {
            align: "center",
            width: 70,
            color: "#e65100",
            value: item.title,
        });
        const elPosition = position;
        elPosition.y = -30;
        entity1.setAttribute("position", elPosition);
        entity1.setAttribute("visible", true);
        return entity1;
    },



})