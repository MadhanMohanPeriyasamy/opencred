/*!
 * Copyright 2023 - 2026 California Department of Motor Vehicles
 * Copyright 2023 - 2026 Digital Bazaar, Inc.
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {config} from '@bedrock/core';
import '@bedrock/mongodb';

// mongodb config
config.mongodb.name = 'opencred';

// In hosted deployments (e.g. Render, Heroku, Fly.io) there is no MongoDB on
// localhost. Provide a full connection string via the MONGODB_URL environment
// variable, e.g. a MongoDB Atlas SRV URL:
//   mongodb+srv://user:pass@cluster.mongodb.net/opencred?retryWrites=true&w=majority
// When set, the host, port, database name, credentials, and options are parsed
// from this URL. When unset, the local default (localhost:27017) is used.
//if(process.env.MONGODB_URL) {
  config.mongodb.url = 'mongodb+srv://madhansamy84_db_user:gvmJVTxZEBBeyi1D@clusterm0.pjiygdw.mongodb.net/opencred?retryWrites=true&w=majority';
//}
