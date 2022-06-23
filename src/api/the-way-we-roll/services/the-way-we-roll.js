'use strict';

/**
 * the-way-we-roll service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::the-way-we-roll.the-way-we-roll');
