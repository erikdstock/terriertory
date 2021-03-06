module UsersHelper

  def self.geojson(marks, geotype)
    coordinates = Array.new

      marks.each do |mark|
        coordinates << [mark.longitude, mark.latitude]
      end

      coordinates << [marks.first.longitude, marks.first.latitude]

      features = [{
          type: "Feature",
          geometry: {
            type: geotype,
            coordinates: [coordinates]
          },
          properties: {
            geometry: "Polygon",
            zIndex: 9999,
            fillColor: "#ff292c",
            strokeColor: "#ff292c",
            strokeWeight: 8,
            fillOpacity: 0.5
          }
        }]

    geojson = { type: "FeatureCollection",
                features: features
              }

    puts geojson

    return geojson
  end

end
