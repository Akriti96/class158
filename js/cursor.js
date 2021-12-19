AFRAME.registerComponent("cursor-event", {
    schema: {
        selectId: { type: "string", default: "" }
    },

    init: function () {
        this.handleMouseEnter()
        this.handleMouseLeave()
  
    },

    handlePlacesState: function () {
        const id = this.el.getAttribute("id")
        const placesId = ["taj-mahal", "new-york"]
        //   console.log(placesId)
        if (placesId.includes(id)) {
            const placecontainer = document.querySelector("#places-container")
            console.log(placecontainer)
            placecontainer.setAttribute("cursor-event", {
                selectId: id
            })

            this.el.setAttribute("material", {
                color: "green",
                opacity: 1
            })

        }

    },

    handleMouseEnter: function () {
        //Cursor 'mouseenter' Events
        this.el.addEventListener("mouseenter", () => {
            this.handlePlacesState();
        });
    },

    handleMouseLeave: function () {
    //Cursor 'mouseleave' Events
        this.el.addEventListener("mouseleave", () => {
            if (this.data.selectId) {
                const el = document.querySelector(`#${this.data.selectId}`)
                const id = el.getAttribute("id")
                if (id == this.data.selectId) {
                    el.setAttribute("material", {
                        color: "black",
                        opacity: 1
                    })
                }

            }
        })
    },


})