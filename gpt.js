window.addEventListener("load", function () {
  //DOMContentLoaded or load

  (function () {
    var gads = document.createElement("script");
    gads.async = true;
    gads.type = "text/javascript";
    var useSSL = "https:" == document.location.protocol;
    gads.src =
      (useSSL ? "https:" : "http:") +
      "//securepubads.g.doubleclick.net/tag/js/gpt.js";
    var node = document.getElementsByTagName("script")[0];
    node.parentNode.insertBefore(gads, node);
  })();

  window.googletag = window.googletag || { cmd: [] };

  googletag.cmd.push(function () {
    googletag.pubads().disableInitialLoad();
    googletag.pubads().enableSingleRequest();
    googletag.enableServices();
  });

  (function waitForGPT() {
    var adContainers = document.querySelectorAll(".adyb");

    var ads = {
      enabled: {
        display: true,
        video: true,
      },
      path: "/30612285/",
      //.'targeting': {"post_id":6,"environment":"production","platform":"web","category":"other","tags":["keytruda ros"]}
    };

    if (window.googletag && window.googletag.pubadsReady) {
      console.log("GPT YES");

      var adContainers = document.querySelectorAll(".adyb");

      adContainers.forEach(function (el) {
        // skip oop slots or any slot that doesn't have a mapping

        if (el.dataset.adSlotOop || !el.dataset.adMapping) {
          return;
        }

        var mapping = el.dataset.adMapping;
        var sizeConfig = [];
      });

      if (!ads.enabled.display) {
        adContainers.forEach(function (el) {
          //document.getElementById(el.id).classList.add('collapsed');
        });
      } else {
        googletag.cmd.push(function () {
          // create a variable for the sticky slot, required to adjust the CSS for the slide-in signUpContainer
          var slotSticky;

          var mappings = {
            sticky: googletag
              .sizeMapping()
              .addSize([728, 250], []) // only serves on screens smaller than 728
              .addSize([0, 0], [[320, 50]])
              .build(),

            leaderboard: googletag
              .sizeMapping()
              .addSize(
                [1280, 768],
                [
                  [970, 90],
                  [728, 90],
                ]
              )
              .addSize([768, 300], [[728, 90]])
              .addSize([0, 0], [[320, 50]])
              .build(),

            RightRailTop: googletag
              .sizeMapping()
              .addSize(
                [768, 300],
                [
                  [300, 600],
                  [300, 250],
                ]
              )
              //addSize([728, 250], [728, 90]).
              .addSize([0, 0], [[300, 250]])
              .build(),

            RightRailBottom: googletag
              .sizeMapping()
              .addSize(
                [0, 0],
                [
                  [300, 600],
                  [300, 250],
                ]
              )
              .build(),

            inbody: googletag
              .sizeMapping()
              .addSize([970, 250], [])
              .addSize([728, 250], [[728, 90]])
              .addSize([0, 0], [[300, 250]])
              .build(),
          };

          adContainers.forEach(function (el) {
            if (el.dataset.adSlotOop) {
              googletag
                .defineOutOfPageSlot(ads.path + el.dataset.adSlot, el.id)
                .addService(googletag.pubads());
            } else {
              var slot;

              console.log("AD UNIT " + ads.path + el.dataset.adSlot);

              if (el.dataset.adMapping) {
                var mapping = el.dataset.adMapping;

                if (mapping === "sticky") {
                  slot = googletag
                    .defineSlot(
                      ads.path + el.dataset.adSlot,
                      [[320, 50]],
                      el.id
                    )
                    .addService(googletag.pubads())
                    .setTargeting("position", el.dataset.adTargetingpos)
                    .defineSizeMapping(mappings.sticky);
                  slotSticky = slot;
                } else if (mapping === "leaderboard") {
                  slot = googletag
                    .defineSlot(
                      ads.path + el.dataset.adSlot,
                      [
                        [970, 90],
                        [728, 90],
                      ],
                      el.id
                    )
                    .addService(googletag.pubads())
                    .setTargeting("position", el.dataset.adTargetingpos)
                    .defineSizeMapping(mappings.leaderboard);
                } else if (mapping === "rightrailtop") {
                  slot = googletag
                    .defineSlot(
                      ads.path + el.dataset.adSlot,
                      [
                        [300, 600],
                        [300, 250],
                      ],
                      el.id
                    )
                    .addService(googletag.pubads())
                    .setTargeting("position", el.dataset.adTargetingpos)
                    .defineSizeMapping(mappings.RightRailTop);
                } else if (mapping === "rightrailbottom") {
                  slot = googletag
                    .defineSlot(
                      ads.path + el.dataset.adSlot,
                      [
                        [300, 600],
                        [300, 250],
                      ],
                      el.id
                    )
                    .addService(googletag.pubads())
                    .setTargeting("position", el.dataset.adTargetingpos)
                    .defineSizeMapping(mappings.RightRailBottom);
                } else if (mapping === "inbody") {
                  slot = googletag
                    .defineSlot(
                      ads.path + el.dataset.adSlot,
                      [
                        [300, 250],
                        [728, 90],
                      ],
                      el.id
                    )
                    .addService(googletag.pubads())
                    .setTargeting("position", el.dataset.adTargetingpos)
                    .defineSizeMapping(mappings.inbody);
                }
              }
            }
          });
          /*
				googletag.pubads().setTargeting('post_id', ads.targeting.post_id.toString());
				googletag.pubads().setTargeting('environment', ads.targeting.environment);
				googletag.pubads().setTargeting('platform', ads.targeting.platform);
				googletag.pubads().setTargeting('category', ads.targeting.category);
				googletag.pubads().setTargeting('tags', ads.targeting.tags);
			*/

          /*
				googletag.pubads().addEventListener('slotRequested', function(event) {
				  document.getElementById(event.slot.getSlotElementId()).setAttribute('data-ad-fetched', 'true');
				});
		*/
          // googletag.pubads().addEventListener('slotOnload', function(event) {
          //   document.getElementById(event.slot.getSlotElementId()).setAttribute('data-ad-loaded', 'true');
          // });

          // googletag.pubads().addEventListener('slotRenderEnded', function(event) {
          //   document.getElementById(event.slot.getSlotElementId()).setAttribute('data-ad-rendered', 'true');

          //   // explicitly set the slot display to ensure previously hidden slots render on refresh
          //   //document.getElementById(event.slot.getSlotElementId()).classList.remove('collapsed');

          //   /*
          //   if (event.isEmpty) {
          // 	// manually collapse empty slot since lazy loading does not support collapseEmptyDivs
          // 	document.getElementById(event.slot.getSlotElementId()).classList.add('collapsed');
          //   }

          //   if (slotSticky === event.slot && !event.isEmpty) {
          // 	// after two seconds, remove the collapsed class from the sticky close button
          // 	setTimeout(function() {
          // 	  document.getElementById('adStickyClose').classList.remove('collapsed');
          // 	}, 2000);

          //   }
          //   */
          // });

          googletag.enableServices();

          googletag
            .pubads()
            .getSlots()
            .forEach(function (slotic) {
              if (PerformanceNavigationTiming.type === "reload") {
                googletag.display(slotic.getSlotElementId());
                googletag
                  .pubads()
                  .refresh([slotic], { changeCorrelator: false });
              } else {
                googletag.display(slotic.getSlotElementId());
                googletag
                  .pubads()
                  .refresh([slotic], { changeCorrelator: false });
              }
            });
        });
      }
    } else {
      console.log("GPT NO");

      setTimeout(waitForGPT, 100);
    }
  })();
  //}, 1000);

  console.log("DOM fully loaded and parsed");

  // setTimeout(function(){
});
