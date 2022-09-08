import { model, Schema } from 'mongoose';

const GeoJSON = new Schema({
  type: {
    type: String,
    enum: ['Point'],
    required: true
  },
  coordinates: {
    type: [Number],
    required: true
  }
})

const VolcanoSchema: Schema = new Schema({
  "Volcano Name": {
    type: String,
    required: true,
    message: 'Le nom est requis',
  },
  Country: {
    type: String,
    required: true,
    message: 'Country est requis'
  },
  Region: {
    type: String,
    required: true,
    message: 'Region est requis'
  },
  Location: {
    type: GeoJSON,
    required: true,
    message: 'Location est requis'
  },
  Elevation: {
    type: Number,
    required: true,
    message: 'Elevation est requis'
  },
  type: {
    type: String,
    required: true,
    message: 'type est requis'
  },
  Status: {
    type: String,
    required: true,
    message: 'Status est requis'
  },
  "Last Known Eruption": {
    type: String,
    required: true,
    message: '"Last Known Eruption" est requis'
  },
  id: {
    type: String,
    required: false
  }
});

const VolcanoModel = model('volcanoes', VolcanoSchema);

export { VolcanoSchema, VolcanoModel };
