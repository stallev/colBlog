export const getHomepage = /* GraphQL */ `query Homepage {
  homepage {
    data {
      attributes {
        title
        description
        MainHomeSlider {
          slideItem {
            SlideTitle
            SlideDescription
            SlideBg {
              data {
                id
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
}
`;