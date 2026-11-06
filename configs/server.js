/*!
 * Copyright 2023 - 2026 California Department of Motor Vehicles
 * Copyright 2023 - 2026 Digital Bazaar, Inc.
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {config} from '@bedrock/core';
import '@bedrock/server';

// server info

config.express.httpOnly = true;
config.express.fastifyOptions.trustProxy = true;
config.server.port = 22443;
// Hosted platforms (e.g. Render) inject the port the app must listen on via the
// PORT environment variable and route external traffic to it. With
// `express.httpOnly = true`, the app is served over HTTP on this port. Falls
// back to 22080 for local development.
config.server.httpPort = process.env.PORT ?
  parseInt(process.env.PORT, 10) : 22080;
config.server.bindAddr = ['0.0.0.0'];
config.server.domain = 'localhost';
